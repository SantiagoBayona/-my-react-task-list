import { useState } from 'react';
import PropTypes from 'prop-types';

const Task = ({ nombre }) => {
    const [completada, setCompletada] = useState(false);

    const toggleCompletada = () => {
        setCompletada(!completada);
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={completada}
                    onChange={toggleCompletada}
                />
                <span style={{ textDecoration: completada ? 'line-through' : 'none' }}>
          {nombre}
        </span>
            </label>
        </div>
    );
};

Task.propTypes = {
    nombre: PropTypes.string.isRequired,
};

export default Task;

