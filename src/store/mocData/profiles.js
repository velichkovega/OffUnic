let profiles = [
    {
        id: 1,
        lvl: 1,
        mainInfo: {
            name: 'Finn the human',
            position: 'Hero of kingdom Ooo',
            project: 'Adventure Time',
            status: 'Vacation until April 25, 2020',
            avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8cc1748-ad44-4557-af39-813369af82b2/d98bhb0-3136a09b-26c4-44d4-a29a-aaa63130c348.jpg/v1/fill/w_1024,h_768,q_75,strp/adventure_time_avatar_pic_8_by_springtrappedfan_d98bhb0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvZDhjYzE3NDgtYWQ0NC00NTU3LWFmMzktODEzMzY5YWY4MmIyXC9kOThiaGIwLTMxMzZhMDliLTI2YzQtNDRkNC1hMjlhLWFhYTYzMTMwYzM0OC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.PPaUONBjIV8x7m99-VAB9nOZrcMLZ8M2TQ_JljW51tI',
            mail: 'finTheHuman@mail.oo',
            mobile: '+(380)-66-082-20-60',
            skype: 'FinAndJack1283',
            rooms: '704, 703',
            about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        skills: {
            main: ["Sword", "Shild"],
            second: ["Hands", "Brain", "Legs"]
        },
        workDays: {
            daysVacation: `Vacation days left : ${21}`,
            seekLeave: 'Seek days left: 13, this month left: 2',
            remote: 'Remote work days left: 2'
        }
    },
]

function getProfile(id) {
    let result = null;
    profiles.forEach(elem => {
        if(id === elem.id) {
            result = elem;
        }
    });
    return result
}


export default getProfile;