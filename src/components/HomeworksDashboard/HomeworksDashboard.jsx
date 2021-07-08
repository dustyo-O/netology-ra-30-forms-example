import { useState } from 'react';
import { HomeworksDashboardFooter } from './Footer/HomeworksDashboard-Footer';
import { getLectionTitle, homeworksDashboardFields, homeworkStatuses } from './HomeworksDashboard.constants';
import './HomeworksDashboard.css';

export function HomeworksDashboard() {
    const [homeworks, setHomeworks] = useState([]);

    const onHomeworkAdd = (homework) => {
        console.log(homework);
        setHomeworks(prev => [...prev, {
            number: prev.length + 1,
            student: homework.student,
            lection: getLectionTitle(homework.lection),
            status: homeworkStatuses[homework.status]
        }])
    }

    return (
        <div className="HomeworksDashboard">
            <header className="HomeworksDashboard-Header HomeworksDashboard-Row">
                {Object.keys(homeworksDashboardFields).map(field => (
                    <div className="HomeworksDashboard-Cell" key={field}>
                        {homeworksDashboardFields[field]}
                    </div>
                ))}
            </header>
            <main className="HomeworksDashboard-Main">
            {homeworks.map(homework => (
                <div className="HomeworksDashboard-Row">
                    {Object.keys(homeworksDashboardFields).map(field => (
                        <div className="HomeworksDashboard-Cell" key={field}>
                            {homework[field]}
                        </div>
                    ))}
                </div>
            ))}
            </main>
            <HomeworksDashboardFooter onSubmit={onHomeworkAdd}/>
        </div>
    );
}
