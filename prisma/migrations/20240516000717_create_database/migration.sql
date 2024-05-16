-- CreateTable
CREATE TABLE `player` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `position` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `player_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `fundation` INTEGER NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `technician` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `team_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team_player` (
    `id` VARCHAR(191) NOT NULL,
    `fk_player_id` VARCHAR(191) NOT NULL,
    `fk_team_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `team_player_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `match` (
    `id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `locale` VARCHAR(191) NOT NULL,
    `scoreboard` VARCHAR(191) NOT NULL,
    `homeTeam` VARCHAR(191) NOT NULL,
    `visitorTeam` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `match_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `team_player` ADD CONSTRAINT `team_player_fk_player_id_fkey` FOREIGN KEY (`fk_player_id`) REFERENCES `player`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_player` ADD CONSTRAINT `team_player_fk_team_id_fkey` FOREIGN KEY (`fk_team_id`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
