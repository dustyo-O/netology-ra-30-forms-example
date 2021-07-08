/* eslint-disable default-case */
import { HomeworksDashboardFieldTypeLection } from './_type_lection/HomeworksDashboardField_type_lection';
import { HomeworksDashboardFieldTypeStatus } from './_type_status/HomeworksDashboardField_type_status';
import { HomeworksDashboardFieldTypeStudent } from './_type_student/HomeworksDashboardField_type_student';

export function HomeworksDashboardField({ type, onChange }) {
    const onFieldChange = (value) => {
        onChange(value);
    }
    switch (type) {
        case 'student':
            return <HomeworksDashboardFieldTypeStudent onChange={onFieldChange}/>;
        case 'lection':
            return <HomeworksDashboardFieldTypeLection onChange={onFieldChange}/>;
        case 'status':
            return <HomeworksDashboardFieldTypeStatus onChange={onFieldChange}/>;
    }
}
