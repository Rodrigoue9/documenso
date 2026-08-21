export function requireTwoFactorCheck(user: { twoFactorEnabled?: boolean }): boolean {
  return Boolean(user.twoFactorEnabled);
}
