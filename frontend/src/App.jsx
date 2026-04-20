import { useEffect, useMemo, useState } from 'react';

const API_URL = 'http://localhost:3001/api/tasks';

const STATUS_OPTIONS = ['TODO', 'IN_PROGRESS', 'DONE'];

const nextStatusMap = {
  TODO: 'IN_PROGRESS',
  IN_PROGRESS: 'DONE',
  DONE: 'TODO',
};

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formError, setFormError] = useState('');

  const [form, setForm] = useState({
    title: '',
    description: '',
    assignee: '',
    dueDate: '',
  });

  const fetchTasks = async (status = filterStatus) => {
    try {
      setLoading(true);
      setError('');

      const url =
        status && status !== 'ALL'
          ? `${API_URL}?status=${status}`
          : API_URL;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('No se pudieron cargar las tareas.');
      }

      const data = await response.json();
      setTasks(data);
    } catch (err) {
      setError(err.message || 'Ocurrió un error al obtener las tareas.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleFilterChange = async (e) => {
    const value = e.target.value;
    setFilterStatus(value);
    await fetchTasks(value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormError('');
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setForm({
      title: '',
      description: '',
      assignee: '',
      dueDate: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      setFormError('');

      const payload = {
        title: form.title.trim(),
        description: form.description.trim() || undefined,
        assignee: form.assignee.trim(),
        dueDate: form.dueDate || undefined,
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const maybeError = await response.json().catch(() => null);
        throw new Error(
          maybeError?.message?.join?.(', ') ||
            maybeError?.message ||
            'No se pudo crear la tarea.',
        );
      }

      resetForm();
      await fetchTasks();
    } catch (err) {
      setFormError(err.message || 'Ocurrió un error al crear la tarea.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChangeStatus = async (task) => {
    try {
      setError('');
      const nextStatus = nextStatusMap[task.status];

      const response = await fetch(`${API_URL}/${task.id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: nextStatus }),
      });

      if (!response.ok) {
        const maybeError = await response.json().catch(() => null);
        throw new Error(
          maybeError?.message || 'No se pudo actualizar el estado.',
        );
      }

      await fetchTasks();
    } catch (err) {
      setError(err.message || 'Error al actualizar el estado.');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      setError('');

      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const maybeError = await response.json().catch(() => null);
        throw new Error(maybeError?.message || 'No se pudo eliminar la tarea.');
      }

      await fetchTasks();
    } catch (err) {
      setError(err.message || 'Error al eliminar la tarea.');
      console.error(err);
    }
  };

  const emptyStateMessage = useMemo(() => {
    if (loading) return 'Cargando tareas...';
    if (tasks.length === 0) return 'No hay tareas para mostrar.';
    return '';
  }, [loading, tasks]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Gestor de Tareas de Equipo</h1>
        <p>Frontend para la evaluación práctica Full Stack</p>
      </header>

      <section className="card">
        <h2>Crear nueva tarea</h2>

        <form className="task-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div>
              <label htmlFor="title">Título</label>
              <input
                id="title"
                name="title"
                type="text"
                maxLength="120"
                value={form.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="assignee">Asignado a</label>
              <input
                id="assignee"
                name="assignee"
                type="text"
                value={form.assignee}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="dueDate">Fecha límite</label>
              <input
                id="dueDate"
                name="dueDate"
                type="date"
                value={form.dueDate}
                onChange={handleInputChange}
              />
            </div>

            <div className="full-width">
              <label htmlFor="description">Descripción</label>
              <textarea
                id="description"
                name="description"
                rows="3"
                value={form.description}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {formError && <p className="error-message">{formError}</p>}

          <button type="submit" disabled={submitting}>
            {submitting ? 'Guardando...' : 'Crear tarea'}
          </button>
        </form>
      </section>

      <section className="card">
        <div className="toolbar">
          <h2>Listado de tareas</h2>

          <div className="filter-group">
            <label htmlFor="filterStatus">Filtrar por estado</label>
            <select
              id="filterStatus"
              value={filterStatus}
              onChange={handleFilterChange}
            >
              <option value="ALL">Todas</option>
              {STATUS_OPTIONS.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        {emptyStateMessage ? (
          <p className="empty-state">{emptyStateMessage}</p>
        ) : (
          <div className="task-list">
            {tasks.map((task) => (
              <article className="task-item" key={task.id}>
                <div className="task-main">
                  <h3>{task.title}</h3>
                  <p>
                    <strong>Asignado a:</strong> {task.assignee}
                  </p>
                  <p>
                    <strong>Estado:</strong> {task.status}
                  </p>
                  <p>
                    <strong>Fecha límite:</strong>{' '}
                    {task.dueDate
                      ? new Date(task.dueDate).toLocaleDateString()
                      : 'Sin fecha'}
                  </p>
                  {task.description && (
                    <p>
                      <strong>Descripción:</strong> {task.description}
                    </p>
                  )}
                </div>

                <div className="task-actions">
                  <button onClick={() => handleChangeStatus(task)}>
                    Cambiar a {nextStatusMap[task.status]}
                  </button>
                  <button
                    className="danger"
                    onClick={() => handleDelete(task.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;