import './styles.css';
import { handleChange } from '../../functions/handleChange';

export const Filter = ({ directors }) => (
  <div className="container-header">
    <label htmlFor="directors" className="filter-title">
      Filter movies by director:
    </label>

    <select
      id="directors"
      className="filter-select"
      name="directors"
      onChange={(e) => handleChange({ e })}
    >
      <option value="">Show All</option>
      {directors.map((director) => (
        <option key={director} value={director}>
          {director}
        </option>
      ))}
    </select>
  </div>
);
