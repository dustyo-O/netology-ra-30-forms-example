import { Dropdown } from '../../../Dropdown/Dropdown';
import { homeworkStatuses } from '../../HomeworksDashboard.constants';

const options = Object.entries(homeworkStatuses)
    .map(entry => ({ value: entry[0], title: entry[1] }));

export function HomeworksDashboardFieldTypeStatus({ onChange }) {
    return (
        <Dropdown options={options}  onChange={onChange}/>
    );
}
