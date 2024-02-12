import { config } from "dotenv"
import { DataSource } from "typeorm"

const buildDataSource = async () => {
    config()
    return new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}'
        ],
        migrations: [
            __dirname + '/../migrations/**'
        ]
    })
}

export default buildDataSource();