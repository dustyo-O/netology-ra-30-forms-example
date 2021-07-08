import { Dropdown } from '../../../Dropdown/Dropdown';

import { homeworkDashboardLections } from '../../HomeworksDashboard.constants';

const options = homeworkDashboardLections.map(lection => ({
    value: lection.id,
    title: lection.lection,
}))

export function HomeworksDashboardFieldTypeLection({ onChange }) {
    const onLectionChange = (value) => {
        onChange(value);
    };

    return (
        <Dropdown options={options} onChange={onLectionChange}/>
    );
}
