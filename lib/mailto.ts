type MailtoFieldValue = string | number | boolean | File | null | undefined

function normalizeFieldValue(value: MailtoFieldValue): string {
  if (value === null || value === undefined) return ''
  if (typeof File !== 'undefined' && value instanceof File) return value.name
  return String(value).trim()
}

export function buildMailtoUrl(args: {
  to: string
  subject: string
  fields: Record<string, MailtoFieldValue>
}) {
  const lines = Object.entries(args.fields)
    .map(([key, value]) => [key, normalizeFieldValue(value)] as const)
    .filter(([, value]) => value.length > 0)
    .map(([key, value]) => `${key}: ${value}`)

  const body = lines.join('\n')

  const subject = encodeURIComponent(args.subject)
  const encodedBody = encodeURIComponent(body)

  return `mailto:${args.to}?subject=${subject}&body=${encodedBody}`
}
