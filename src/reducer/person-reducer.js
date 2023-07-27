export default function personReducer(person, action) {
    switch(action.type) {
        case 'updated': {
            const {prev, current} = action;
            // 위 코드로 대체가능
            // const prev = action.prev;
            // const current = action.current;
            return {
                ...person,
                mentors : person.mentors.map((mentor) => {
                    if(mentor.name == prev) {
                        return {...mentor, name: current};
                    } 
                    return mentor;
                })
            };
        }
        case 'added': {
            const {name, title} = action;
            return {
                ...person,
                mentors : [...person.mentors, { name, title }]
            };
        }
        case 'deleted': {
            return {
                ...person,
                mentors : person.mentors.filter(m => m.name !== action.name),
            };
        }
        default: {
            throw Error(`알수없는 액션 타입이다: ${action.type}`);
        }
    }
}