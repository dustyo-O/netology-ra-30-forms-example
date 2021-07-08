import { useState } from 'react';
import { HomeworksDashboardField } from '../Field/HomeworksDashboardField';
import { homeworksDashboardFields, isFormField } from '../HomeworksDashboard.constants';

export function HomeworksDashboardFooter({ onSubmit }) {
    const [form, setForm] = useState({});

    const onChangeHandler = (type) => {
        return (value) => {
            setForm(prev => ({ ...prev, [type]: value }));
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        onSubmit(form);
    };

    return (
        <form className="HomeworksDashboard-Footer" onSubmit={onFormSubmit}>
            <div className="HomeworksDashboard-Row">
                {Object.keys(homeworksDashboardFields).map(field => (
                    <div className="HomeworksDashboard-Cell" key={field}>{
                        isFormField(field) && <HomeworksDashboardField type={field} onChange={onChangeHandler(field)}/>
                    }</div>
                ))}
            </div>
            <button className="HomeworksDashboard-AddButton">Добавить</button>
        </form>
    );
}
