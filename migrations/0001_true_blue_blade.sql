CREATE TABLE `user_queries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`message` text NOT NULL
);
--> statement-breakpoint
DROP TABLE `posts`;--> statement-breakpoint
DROP TABLE `users`;