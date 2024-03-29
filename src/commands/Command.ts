import { PermissionFlags, Client, Message } from 'discord.js'

export class Argument {
    optional: boolean
    content: string
    name: string
    desc: string
    order: number
    constructor(optional: boolean, content: string, name: string, desc: string, order: number) {
        this.optional = optional
        this.content = content
        this.name = name
        this.desc = desc
        this.order = order
    }
}

export type CommandUsage = {
    args: Argument[],
    command: string
    override: boolean
}

export type CommandInfo = {
    displayname: string,
    description: string,
    usage: CommandUsage
}

export enum Perms {
    ADMINISTRATOR = 'ADMINISTRATOR',
    CREATE_INSTANT_INVITE = 'CREATE_INSTANT_INVITE',
    KICK_MEMBERS = 'KICK_MEMBERS',
    BAN_MEMBERS = 'BAN_MEMBERS',
    MANAGE_CHANNELS = 'MANAGE_CHANNELS',
    MANAGE_GUILD = 'MANAGE_GUILD',
    ADD_REACTIONS = 'ADD_REACTIONS',
    VIEW_AUDIT_LOG = 'VIEW_AUDIT_LOG',
    PRIORITY_SPEAKER = 'PRIORITY_SPEAKER',
    STREAM = 'STREAM',
    VIEW_CHANNEL = 'VIEW_CHANNEL',
    SEND_MESSAGES = 'SEND_MESSAGES',
    SEND_TTS_MESSAGES = 'SEND_TTS_MESSAGES',
    MANAGE_MESSAGES = 'MANAGE_MESSAGES',
    EMBED_LINKS = 'EMBED_LINKS',
    ATTACH_FILES = 'ATTACH_FILES',
    READ_MESSAGE_HISTORY = 'READ_MESSAGE_HISTORY',
    MENTION_EVERYONE = 'MENTION_EVERYONE',
    USE_EXTERNAL_EMOJIS = 'USE_EXTERNAL_EMOJIS',
    VIEW_GUILD_INSIGHTS = 'VIEW_GUILD_INSIGHTS',
    CONNECT = 'CONNECT',
    SPEAK = 'SPEAK',
    MUTE_MEMBERS = 'MUTE_MEMBERS',
    DEAFEN_MEMBERS = 'DEAFEN_MEMBERS',
    MOVE_MEMBERS = 'MOVE_MEMBERS',
    USE_VAD = 'USE_VAD',
    CHANGE_NICKNAME = 'CHANGE_NICKNAME',
    MANAGE_NICKNAMES = 'MANAGE_NICKNAMES',
    MANAGE_ROLES = 'MANAGE_ROLES',
    MANAGE_WEBHOOKS = 'MANAGE_WEBHOOKS',
    MANAGE_EMOJIS = 'MANAGE_EMOJIS',
    BOT_OWNER = 'BOT_OWNER'
}

export interface Command {
    name: string
    aliases: string[]
    permissions: Perms[]
    handle: (client: Client, guildCache: any ,message: Message, args: Argument[] | string[]) => any
    info: CommandInfo
    dm: boolean
}