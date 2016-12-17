import Raven from 'raven-js';

const sentry_key = '307e782781aa4ee48b2e10b9d7bbe282';
const sentry_app = "122945";

export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app};`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });

  window.console && console.error && console.error(ex);
}
