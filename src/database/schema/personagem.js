import { varchar, integer, date, pgTable, pgEnum, uuid } from 'drizzle-orm/pg-core'

export const personagem = pgTable('personagem', {
    id: uuid().primaryKey().defaultRandom().notNull(),
    run_id: uuid().references(() => run.id).notNull(),
    nome: varchar({ length: 255 }).notNull(),
    img_idle: varchar({ length: 255 }).notNull(),
    img_act: varchar({ length: 255 }).notNull(),
    img_down: varchar({ length: 255 }).notNull(),
    hp: integer().notNull(),
    mp: integer().notNull()
})

//lembra de fazer um .default() para nome: e img: