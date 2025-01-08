CREATE TABLE `user_subscriptions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL
);
