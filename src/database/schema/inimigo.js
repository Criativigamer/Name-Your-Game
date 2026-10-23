import { varchar, integer, date, pgTable, pgEnum, uuid } from 'drizzle-orm/pg-core'

export const inimigo = pgTable('inimigo', {
    id: uuid().primaryKey().defaultRandom().notNull(),
    run_id: uuid().references(() => run.id).notNull(),
    nome: varchar({ length: 255 }).notNull(),
    img_idle: varchar({ length: 255 }).notNull(),
    img_act: varchar({ length: 255 }).notNull(),
    tipo: varchar({ length: 255 }).notNull()
})

//lembra de fazer um .default() para nome: e img: