CREATE TABLE `data_point` (
	`id` text PRIMARY KEY NOT NULL,
	`x` real NOT NULL,
	`y` real NOT NULL,
	`z_1` real NOT NULL,
	`z_2` real,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
