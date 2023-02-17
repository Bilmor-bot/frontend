class Model {
    getUsers() {
        return Promise.resolve({
            users: [
                {
                    id: 1,
                    name: "Alice"
                }
            ]
        });
    }
}

export default Model;
