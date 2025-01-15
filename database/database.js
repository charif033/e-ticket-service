const {DataSource} = require("typeorm");
const {User} = require("./entity");

const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "test-db",
    synchronize: true,
    logging: false,
    entities: [User],
});

AppDataSource.initialize()
    .then(async () => {
        console.log("Database connected!");

        // ตัวอย่างการบันทึกข้อมูล
        const userRepository = AppDataSource.getRepository(User);
        const user = userRepository.create({
            firstName: "John",
            lastName: "Doe",
            isActive: true
        });
        await userRepository.save(user);
        console.log("New user has been saved!");
    })
    .catch((error) => console.log("Error: ", error));
    //test2