export const homeworksDashboardFields = {
    number: '#',
    student: 'Студент',
    lection: 'Лекция',
    status: 'Статус',
    buttons: ''
};

export const isFormField = (field) => {
    return ['student', 'lection', 'status'].includes(field);
}

export const homeworkStatuses = {
    new: 'Новая',
    waitForCheck: 'Ожидает проверки',
    inProgress: 'На проверке',
    needCorrection: 'На доработке',
    rejected: 'Незачет',
    accepted: 'Зачет',
};

export const homeworkDashboardLections = [
    { id: 2, lection: 'События и состояния' },
    { id: 4, lection: 'Формы' },
];

export function getLectionTitle(id) {
    return homeworkDashboardLections.find(h => h.id === +id).lection;
}
