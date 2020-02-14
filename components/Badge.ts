enum BadgeStatus {
    Default,
    Success,
    Info,
    Attention,
    Warning,
    New
}

interface Badge {
    message: string;
    status: BadgeStatus;
}
