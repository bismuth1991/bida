/*
 SQLite does not support "Set not null to column" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html
                  https://stackoverflow.com/questions/2083543/modify-a-columns-type-in-sqlite3

 Due to that we don't generate migration automatically and it has to be done manually

 But libsql does!!!
	https://github.com/tursodatabase/libsql/blob/main/libsql-sqlite3/doc/libsql_extensions.md#altering-columns
*/
ALTER TABLE `data_point` ALTER COLUMN `z_2` TO `z_2` real NOT NULL;
