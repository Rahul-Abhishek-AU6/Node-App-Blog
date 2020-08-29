const users = [];

export default {

    getData: (user) => {

        console.log('Fething user data...');

        return new Promise((resolve, reject) => {
            const userData = {
                name: 'User',
                email: 'user@email.com',
                password: 'pass',
            }

            if (user.email === userData.email && user.password === userData.password) {
                setTimeout(() => {
                    console.log('Data fetched!')
                    resolve(userData);
                });
            } else {
                reject({ message: 'Login failed!' });
            }
        }, 2000);
    },

    addData: (user) => {

        console.log('Adding user data...');

        const userData = {
            name: user.name,
            email: user.email,
            password: user.password
        }

        users.push(userData);

        return userData;
    }
};
