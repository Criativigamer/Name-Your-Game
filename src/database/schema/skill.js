import { varchar, integer, pgTable, uuid, check } from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

export const skill = pgTable('skill', {
    id: uuid().primaryKey().defaultRandom().notNull(),
    nome: varchar({ length: 255 }).notNull(),
    img: varchar({ length: 255 }).notNull(),
    dmg: integer(),
    cost: integer(),
    descricao: varchar({ length: 255 }),
    personagem_id: uuid().references(() => personagem.id),
    inimigo_id: uuid().references(() => inimigo.id)
}, (table) => [
    check(
        'skill_dono_check',
        sql`num_nonnulls(${table.personagem_id}, ${table.inimigo_id}) = 1`
    )
])

//lembra de fazer um .default() para nome: e img: