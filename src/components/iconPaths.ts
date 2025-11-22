/**
 * Fill opacity value between 0 and 1 (e.g., 0 = transparent, 1 = opaque)
 */
export type IconFillOpacity = number;

/**
 * Standard fill opacity value for icon backgrounds
 *
 * WARNING: This value is embedded in SVG path strings at module load time.
 * If dynamic opacity per-icon-instance is needed, this pattern may need revision.
 * The template literals are evaluated immediately when this module loads.
 */
export const iconFillOpacity = 0.15 as IconFillOpacity;

// Define the icon paths with embedded opacity
export const iconPaths = {
  sun: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 10.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM7 .5v1m0 11v1M13.5 7h-1m-11 0h-1m11.1-4.6-.71.71m-7.78 7.78-.71.71m9.2 0-.71-.71M3.11 3.11 2.4 2.4"/>
  `,
  moon: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 10.48A6.55 6.55 0 0 1 6.46.5a6.55 6.55 0 0 0 1 13A6.46 6.46 0 0 0 13 10.39c-.33.055-.665.085-1 .09Z"/>
  `,
  globe_language: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM.5 7h13"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 7A11.22 11.22 0 0 1 7 13.5 11.22 11.22 0 0 1 4.5 7 11.22 11.22 0 0 1 7 .5 11.22 11.22 0 0 1 9.5 7Z"/>
  `,
  arrow_right_tailless: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 .5 6.146 6.146a.5.5 0 0 1 0 .708L4 13.5"/>
  `,
  book: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13s1.667-2.5 5.002-2.936C12.549 9.993 13 9.552 13 9V3.5c0-.552-.45-1.007-.997-.936A7.357 7.357 0 0 0 11 2.766"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.498.776C7 1.156 7 5.5 7 5.5V13s0-3.927 3.007-4.64c.538-.127.993-.558.993-1.11v-6c0-.276-.227-.503-.502-.474Zm-8.5 1.788C5.333 3 7 5.5 7 5.5V13s-1.667-2.5-5.002-2.936C1.451 9.993 1 9.552 1 9V3.5c0-.552.45-1.007.998-.936Z"/>
  `,
  dictionary: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 13.5H3a1.5 1.5 0 1 1 0-3h8.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H3a1.5 1.5 0 0 0-1.5 1.46v10m10-1.46v3"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.051 5.002h2.316l-2.46 3.473h2.604M3.512 5.986l1.066-3.199a.401.401 0 0 1 .762 0l1.066 3.199M3.898 4.828H6.02"/>
  `,
  teacher: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1 9.25h1.5L3 13h2.5L6 6.25h2.375a1.125 1.125 0 0 0 0-2.25H4a3 3 0 0 0-3 3v2.25Z"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 1H12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8"/>
  `,
  steps: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 1H9v4H5v4H1v4h12V1Z"/>
  `,
  categories: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 6 3-5 3 5H4Z"/>
    <path stroke="currentColor" d="M8 10.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"/>
    <path stroke="currentColor" stroke-linejoin="round" d="M1 8h5v5H1V8Z"/>
  `,
  handshake: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.29 9.785-3.13 2.318a1.949 1.949 0 0 1-2.24.083L.5 8.713m13-.561-2.21 1.626-3.455-3.502-1.2.926a1.224 1.224 0 0 1-1.562-1.885l1.554-1.385a3 3 0 0 1 1.856-.758l2.28-.107L13.5 1.5"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.835 6.282c.83.782 2.005.383 2.442-.255M.5 1.985l2.22 1.266 1.978-.363a2.17 2.17 0 0 1 1.868.552l.282.3"/>
  `,
  certificate: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.646V1.5a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.206"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 11.084a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3 3.025h6.125M3 5.567h2.75"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.344 10.46v3.04L11 12.812l1.656.688v-3.04M11 8.834a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"/>
  `,
  sidebar_left_collapse: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 12V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM5 1v12"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 7 3-2.5v5L7.5 7Z"/>
  `,
  sidebar_left_expand: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 12V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM5 1v12"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.5 7-3 2.5v-5l3 2.5Z"/>
  `,
  sidebar_right_collapse: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 12V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM9 1v12"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 7-3-2.5v5l3-2.5Z"/>
  `,
  sidebar_right_expand: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 12V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM9 1v12"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.5 7 3 2.5v-5L3.5 7Z"/>
  `,
  info_circle: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM5.5 10h3"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 10V6.5H6m1-2.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"/>
  `,
  warning_triangle: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.136 1.98.877 10.997a1 1 0 0 0 .864 1.504h10.518a1 1 0 0 0 .864-1.504l-5.26-9.015a1 1 0 0 0-1.727 0ZM7 5v3.25"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 10.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"/>
  `,
  lightbulb: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 7.5h-1m12 0h1m-2.61-3.889.706-.707m-8.486.707-.706-.707M7 2V1m0 2.75a3.75 3.75 0 0 0-1.5 7.188V12.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.562A3.751 3.751 0 0 0 7 3.75Z"/>
  `,
  arrow_up: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5V.5m4 4-4-4-4 4"/>
  `,
  checkmark_circle: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.917 4.75-4 5-2-1.5"/>
  `,
  x_circle: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.5 4.5-5 5m0-5 5 5m-2.5 4a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"/>
  `,
  chevron_down: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 4 6.146 6.146a.5.5 0 0 0 .708 0L13.5 4"/>
  `,
  contract_verified: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 5.5V4L8 .5H1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h5"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 7.5H8a.5.5 0 0 0-.5.5v1.338a4.387 4.387 0 0 0 3 4.162 4.387 4.387 0 0 0 3-4.162V8a.5.5 0 0 0-.5-.5Z"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.25 10.25 10 11l1.75-1.75M3 4h5M3 7h2.5M3 10h2.5"/>
  `,
  instagram_logo: `
    <path fill="currentColor" fill-rule="evenodd" d="M3.571.5A3.071 3.071 0 0 0 .5 3.571v6.858A3.071 3.071 0 0 0 3.571 13.5h6.858a3.071 3.071 0 0 0 3.071-3.071V3.57A3.071 3.071 0 0 0 10.43.5H3.57Zm6.889 3.656a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM7 4.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" clip-rule="evenodd"/>
  `,
  facebook_logo: `
    <path fill="currentColor" fill-rule="evenodd" d="M.94.94A1.5 1.5 0 0 1 2 .5h10A1.5 1.5 0 0 1 13.5 2v10a1.5 1.5 0 0 1-1.5 1.5H9V9.01h.71a.61.61 0 0 0 .61-.61v-.77a.611.611 0 0 0-.61-.61h-.67v-.69c0-.84.38-.84.76-.84h.49a.55.55 0 0 0 .43-.18.58.58 0 0 0 .18-.43v-.74a.618.618 0 0 0-.6-.64l-.333-.002c-.956-.011-1.903-.021-2.612.75-.63.685-.615 1.521-.6 2.375.003.132.005.265.005.397h-.64a.61.61 0 0 0-.62.61v.77a.61.61 0 0 0 .62.61h.64v4.49H2A1.5 1.5 0 0 1 .5 12V2c0-.398.158-.78.44-1.06Z" clip-rule="evenodd"/>
  `,
  linkedin_logo: `
    <path fill="currentColor" fill-rule="evenodd" d="M2.168 0A1.683 1.683 0 0 0 .501 1.637a1.7 1.7 0 0 0 1.668 1.675 1.674 1.674 0 0 0 1.636-1.686V1.61A1.674 1.674 0 0 0 2.167.001Zm-.01 4.306c-.077 0-.153-.002-.232-.004h-.001A8.395 8.395 0 0 0 1.69 4.3c-.149.001-.336.01-.515.066a.905.905 0 0 0-.52.41C.534 4.98.5 5.215.5 5.45v7.424c0 .236.036.476.16.68a.885.885 0 0 0 .538.398c.178.05.365.051.51.048.074-.001.136-.004.195-.006a5.853 5.853 0 0 1 .51 0c.059.002.12.005.194.006.143.003.33.002.508-.048a.88.88 0 0 0 .535-.4c.121-.204.156-.443.156-.678V5.449c0-.233-.035-.468-.15-.67a.899.899 0 0 0-.518-.413 1.71 1.71 0 0 0-.514-.067l-.232.003h-.003c-.078.002-.153.004-.23.004Zm6.25.12a2.984 2.984 0 0 1 1.449-.25 3.47 3.47 0 0 1 3.64 3.61v5.057c0 .234-.034.472-.154.675a.875.875 0 0 1-.533.403c-.178.05-.365.051-.508.049a9.094 9.094 0 0 1-.194-.007c-.082-.003-.16-.006-.26-.006-.099 0-.176.003-.258.006l-.195.007c-.143.002-.33.001-.508-.049a.875.875 0 0 1-.533-.403c-.12-.204-.153-.441-.153-.675v-3.96l.001-.042A.926.926 0 0 0 9.183 7.84a.935.935 0 0 0-.954 1.025.499.499 0 0 1 .002.049v3.959c0 .235-.035.474-.157.678a.88.88 0 0 1-.536.4c-.178.05-.366.051-.51.048-.074-.001-.136-.004-.196-.006a6.04 6.04 0 0 0-.259-.006c-.1 0-.177.003-.26.006a9.09 9.09 0 0 1-.193.006 1.77 1.77 0 0 1-.509-.048.875.875 0 0 1-.533-.403c-.12-.204-.153-.441-.153-.675V5.449c0-.265.048-.53.203-.748a.948.948 0 0 1 .605-.376c.11-.022.25-.028.369-.03.13-.003.276 0 .419.002l.37.01c.14.005.255.009.335.009.342 0 .555.203.678.397.158-.112.326-.208.504-.287Z" clip-rule="evenodd"/>
  `,
  external_link: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.083 10.417 10.417 4.083M4.5 4.083h6.333v6.334"/>
  `,
} as const;

// Generate IconName type from the object keys to eliminate duplication
export type IconName = keyof typeof iconPaths;
