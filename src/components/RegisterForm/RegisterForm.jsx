import { useState, useRef } from 'react';

const INITIAL_FORM_STATE = {
    login: '',
    password: '',
    agree: false,
    'coding-lang': 1,
    comment: '',
};

const PARTICIPATION_ECONOM = 0;
const PARTICIPATION_BUSINESS = 1;
const PARTICIPATION_VIP = 2;

const PARTICIPATION = [
    [PARTICIPATION_ECONOM, 'Эконом'],
    [PARTICIPATION_BUSINESS, 'Бизнес'],
    [PARTICIPATION_VIP, 'VIP'],
];

const CODING_LANGS = {
    '1': 'JavaScript',
    '2': 'TypeScript',
    '3': 'CoffeeScript',
    '4': 'Node.JS',
};

function getParticipationTitle(participation) {
    return PARTICIPATION.find(p => p[0] === participation)[1];
}

export function RegisterForm() {
    const [form, setForm] = useState(INITIAL_FORM_STATE);
    const [avatar, setAvatar] = useState('');
    const avatarRef = useRef(null);

    const onInputChange = (e) => {
        const field = e.target.name;
        const valueField = e.target.type === 'checkbox' ? 'checked' : 'value';
        setForm(prev => ({ ...prev, [field]: e.target[valueField] }));
    };

    const onFormSubmit = (e) => {
        console.log('onFormSubmit');

        const avatarElem = avatarRef.current;
        console.log(avatarElem);
        const file = avatarElem.files && avatarElem.files[0];

        const reader = new FileReader();

        reader.addEventListener('load', (event) => {
            const result = event.target.result;

            setAvatar(result);
        });

        reader.readAsDataURL(file);

        console.log(form);
        e.preventDefault();
    };

    return (
        <form className="RegisterForm" onSubmit={onFormSubmit}>
            <img className="RegisterForm-Avatar" src={avatar} alt="Аватар пользователя"/>
            <div className="RegisterForm-FormControl">
                <label htmlFor="avatar">Аватар </label>
                <input
                    className="RegisterForm-Input"
                    type="file"
                    id="avatar"
                    name="avatar"
                    ref={avatarRef}
                />
            </div>

            <div className="RegisterForm-FormControl">
                <label htmlFor="login">Логин </label>
                <input
                    className="RegisterForm-Input"
                    id="login"
                    name="login"
                    onChange={onInputChange}
                    value={form.login}
                />
            </div>
            <div className="RegisterForm-FormControl">
                <label htmlFor="password">Пароль </label>
                <input
                    type="password"
                    className="RegisterForm-Input"
                    id="password"
                    name="password"
                    onChange={onInputChange}
                    value={form.password}
                />
            </div>
            <div className="RegisterForm-FormControl">
                <label htmlFor="agree">Согласен со всем </label>
                <input
                    type="checkbox"
                    className="RegisterForm-Input"
                    id="agree"
                    name="agree"
                    onChange={onInputChange}
                    checked={form.agree}
                />
            </div>
            <div className="RegisterForm-FormControl">
                <label>Участие</label>

                {PARTICIPATION.map(participation => (
                    <div key={participation[0]}>
                        <label>{getParticipationTitle(participation[0])}</label>
                        <input
                            type="radio"
                            className="RegisterForm-Input"
                            name="participation"
                            onChange={onInputChange}
                            checked={form.participation === String(participation[0])}
                            value={participation[0]}
                        />
                    </div>
                ))}
            </div>
            <div className="RegisterForm-FormControl">
                <label htmlFor="coding-lang">Любимый язык программирования</label>

                <select
                    className="RegisterForm-Input"
                    name="coding-lang"
                    id="coding-lang"
                    onChange={onInputChange}
                    value={form['coding-lang']}
                >
                    {Object.entries(CODING_LANGS).map(entry => (
                        <option
                            key={entry[0]}
                            className="RegisterForm-Option"
                            value={entry[0]}
                        >
                            {entry[1]}
                        </option>
                    ))}
                </select>
            </div>
            <div className="RegisterForm-FormControl">
                <label htmlFor="login">Комментарий </label>
                <textarea
                    className="RegisterForm-Input"
                    id="comment"
                    name="comment"
                    onChange={onInputChange}
                    value={form.comment}
                />
            </div>
            <button className="RegisterForm-Button RegisterForm-Submit">Отправить</button>
            <button className="RegisterForm-Button RegisterForm-Cancel">Отмена</button>
        </form>
    );
}
