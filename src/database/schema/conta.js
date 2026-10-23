import {varchar, pgTable, uuid} from 'drizzle-orm/pg-core'

export const conta = pgTable('conta', {
    id: uuid().primaryKey().defaultRandom().notNull(),
    userName: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull(),
    senha: varchar({ length: 255 }).notNull()
})