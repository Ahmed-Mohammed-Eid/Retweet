import { cookies } from 'next/headers';

export let defaultLocale = 'en';
let locales = ['en', 'ar'];

// Get the preferred locale, dynamically fetching the 'accept-language' from the request
function getLocale(request) {
    // GET THE LANGUAGES (NATIVELY SUPPORTED BY THE BROWSER) WITHOUT NAVIGATOR
    const languages = request.headers.get('accept-language');
    // GET THE LOCALES (SUPPORTED BY THE WEBSITE)
    const locales = ['en', 'ar'];
    // GET THE DEFAULT LOCALE
    const defaultLocale = 'en';
    // MATCH THE PREFERRED LOCALE
    const matchedLocale = locales.find((locale) => languages.includes(locale));
    // RETURN THE MATCHED LOCALE OR DEFAULT LOCALE
    return matchedLocale || defaultLocale;
}

export async function middleware(request) {
    // Define conditions for skipping the middleware
    const skipMiddleware = ['assets', 'sitemap', 'robots', 'favicon', 'api'].some(
        (item) => request.nextUrl.pathname.includes(item)
    );

    if (skipMiddleware) return;

    // Get the 'lang' cookie from the request
    const lang = cookies().get('lang');

    // Extract the pathname from the request URL
    const { pathname } = request.nextUrl;

    // Check if the pathname already includes a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Determine the locale, checking cookie first, then using the negotiation method
    let locale = locales.includes(lang?.value) ? lang.value : getLocale(request);

    // Update the request URL with the detected locale
    request.nextUrl.pathname = `/${locale}${pathname}`;

    // Redirect the user to the new URL with the correct locale
    return Response.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
    ],
};
