import { varchar, integer, date, pgTable, pgEnum, uuid } from 'drizzle-orm/pg-core'

export const status = pgEnum('status', ['ativa', 'pausada', 'resetada'])

export const run = pgTable('run', {
    id: uuid().primaryKey().defaultRandom().notNull(),
    conta_id: uuid().references(() => conta.id).notNull(),
    status: status().notNull(),
    iniciadaEM: date().notNull(),
    turnoAtual: integer().notNull()
})