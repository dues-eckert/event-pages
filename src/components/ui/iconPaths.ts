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
    <path fill="currentColor" fill-rule="evenodd" d="M4.375.438A3.937 3.937 0 0 0 .437 4.374v5.25a3.937 3.937 0 0 0 3.938 3.938h5.25a3.937 3.937 0 0 0 3.938-3.938v-5.25A3.937 3.937 0 0 0 9.624.437h-5.25ZM1.312 4.374a3.062 3.062 0 0 1 3.063-3.063h5.25a3.062 3.062 0 0 1 3.063 3.063v5.25a3.062 3.062 0 0 1-3.063 3.063h-5.25a3.063 3.063 0 0 1-3.063-3.063v-5.25Zm10.063-.73a.729.729 0 1 1-1.458 0 .729.729 0 0 1 1.458 0ZM7 4.522A2.48 2.48 0 1 0 7 9.48a2.48 2.48 0 0 0 0-4.958ZM3.646 7a3.354 3.354 0 1 1 6.708 0 3.354 3.354 0 0 1-6.708 0Z" clip-rule="evenodd"/>
  `,
  facebook_logo: `
    <path fill="currentColor" d="M7 .399A6.625 6.625 0 0 1 7.803 13.6V9.048h1.792l.372-2.024H7.803v-.716c0-1.003.369-1.427 1.31-1.476a12.181 12.181 0 0 1 .646.001c.13.004.237.01.315.018V3.016c-.296-.082-1.02-.165-1.44-.165-2.214 0-3.235 1.046-3.235 3.3v.873H4.033v2.024H5.4v4.407A6.625 6.625 0 0 1 7 .399Z"/>
  `,
  linkedin_logo: `
    <path fill="currentColor" d="M11.594 11.594H9.661V8.566c0-.722-.013-1.651-1.006-1.651-1.007 0-1.161.786-1.161 1.599v3.08H5.56V5.367h1.856v.851h.026a2.034 2.034 0 0 1 1.832-1.006c1.96 0 2.321 1.29 2.321 2.966v3.416ZM3.378 4.516a1.122 1.122 0 1 1 0-2.244 1.122 1.122 0 0 1 0 2.244Zm.967 7.079H2.41V5.367h1.935v6.227ZM12.558.476H1.438a.952.952 0 0 0-.963.94v11.167a.953.953 0 0 0 .963.942h11.12a.955.955 0 0 0 .967-.942V1.416a.954.954 0 0 0-.967-.94"/>
  `,
  external_link: `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.083 10.417 10.417 4.083M4.5 4.083h6.333v6.334"/>
  `,
} as const;

// Generate IconName type from the object keys to eliminate duplication
export type IconName = keyof typeof iconPaths;
