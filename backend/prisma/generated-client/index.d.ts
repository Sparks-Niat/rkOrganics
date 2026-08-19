
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model SiteSettings
 * 
 */
export type SiteSettings = $Result.DefaultSelection<Prisma.$SiteSettingsPayload>
/**
 * Model ContactDetails
 * 
 */
export type ContactDetails = $Result.DefaultSelection<Prisma.$ContactDetailsPayload>
/**
 * Model AboutContent
 * 
 */
export type AboutContent = $Result.DefaultSelection<Prisma.$AboutContentPayload>
/**
 * Model AboutSection
 * 
 */
export type AboutSection = $Result.DefaultSelection<Prisma.$AboutSectionPayload>
/**
 * Model AboutPhilosophyItem
 * 
 */
export type AboutPhilosophyItem = $Result.DefaultSelection<Prisma.$AboutPhilosophyItemPayload>
/**
 * Model AboutQualityItem
 * 
 */
export type AboutQualityItem = $Result.DefaultSelection<Prisma.$AboutQualityItemPayload>
/**
 * Model AboutWhyChooseUsItem
 * 
 */
export type AboutWhyChooseUsItem = $Result.DefaultSelection<Prisma.$AboutWhyChooseUsItemPayload>
/**
 * Model AboutValueItem
 * 
 */
export type AboutValueItem = $Result.DefaultSelection<Prisma.$AboutValueItemPayload>
/**
 * Model AboutGalleryImage
 * 
 */
export type AboutGalleryImage = $Result.DefaultSelection<Prisma.$AboutGalleryImagePayload>
/**
 * Model AboutCertification
 * 
 */
export type AboutCertification = $Result.DefaultSelection<Prisma.$AboutCertificationPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Medicine
 * 
 */
export type Medicine = $Result.DefaultSelection<Prisma.$MedicinePayload>
/**
 * Model Benefit
 * 
 */
export type Benefit = $Result.DefaultSelection<Prisma.$BenefitPayload>
/**
 * Model Testimonial
 * 
 */
export type Testimonial = $Result.DefaultSelection<Prisma.$TestimonialPayload>
/**
 * Model Promotion
 * 
 */
export type Promotion = $Result.DefaultSelection<Prisma.$PromotionPayload>
/**
 * Model NavigationItem
 * 
 */
export type NavigationItem = $Result.DefaultSelection<Prisma.$NavigationItemPayload>
/**
 * Model WhatsAppSettings
 * 
 */
export type WhatsAppSettings = $Result.DefaultSelection<Prisma.$WhatsAppSettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.siteSettings`: Exposes CRUD operations for the **SiteSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteSettings
    * const siteSettings = await prisma.siteSettings.findMany()
    * ```
    */
  get siteSettings(): Prisma.SiteSettingsDelegate<ExtArgs>;

  /**
   * `prisma.contactDetails`: Exposes CRUD operations for the **ContactDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactDetails
    * const contactDetails = await prisma.contactDetails.findMany()
    * ```
    */
  get contactDetails(): Prisma.ContactDetailsDelegate<ExtArgs>;

  /**
   * `prisma.aboutContent`: Exposes CRUD operations for the **AboutContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutContents
    * const aboutContents = await prisma.aboutContent.findMany()
    * ```
    */
  get aboutContent(): Prisma.AboutContentDelegate<ExtArgs>;

  /**
   * `prisma.aboutSection`: Exposes CRUD operations for the **AboutSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutSections
    * const aboutSections = await prisma.aboutSection.findMany()
    * ```
    */
  get aboutSection(): Prisma.AboutSectionDelegate<ExtArgs>;

  /**
   * `prisma.aboutPhilosophyItem`: Exposes CRUD operations for the **AboutPhilosophyItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutPhilosophyItems
    * const aboutPhilosophyItems = await prisma.aboutPhilosophyItem.findMany()
    * ```
    */
  get aboutPhilosophyItem(): Prisma.AboutPhilosophyItemDelegate<ExtArgs>;

  /**
   * `prisma.aboutQualityItem`: Exposes CRUD operations for the **AboutQualityItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutQualityItems
    * const aboutQualityItems = await prisma.aboutQualityItem.findMany()
    * ```
    */
  get aboutQualityItem(): Prisma.AboutQualityItemDelegate<ExtArgs>;

  /**
   * `prisma.aboutWhyChooseUsItem`: Exposes CRUD operations for the **AboutWhyChooseUsItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutWhyChooseUsItems
    * const aboutWhyChooseUsItems = await prisma.aboutWhyChooseUsItem.findMany()
    * ```
    */
  get aboutWhyChooseUsItem(): Prisma.AboutWhyChooseUsItemDelegate<ExtArgs>;

  /**
   * `prisma.aboutValueItem`: Exposes CRUD operations for the **AboutValueItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutValueItems
    * const aboutValueItems = await prisma.aboutValueItem.findMany()
    * ```
    */
  get aboutValueItem(): Prisma.AboutValueItemDelegate<ExtArgs>;

  /**
   * `prisma.aboutGalleryImage`: Exposes CRUD operations for the **AboutGalleryImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutGalleryImages
    * const aboutGalleryImages = await prisma.aboutGalleryImage.findMany()
    * ```
    */
  get aboutGalleryImage(): Prisma.AboutGalleryImageDelegate<ExtArgs>;

  /**
   * `prisma.aboutCertification`: Exposes CRUD operations for the **AboutCertification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutCertifications
    * const aboutCertifications = await prisma.aboutCertification.findMany()
    * ```
    */
  get aboutCertification(): Prisma.AboutCertificationDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.medicine`: Exposes CRUD operations for the **Medicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicines
    * const medicines = await prisma.medicine.findMany()
    * ```
    */
  get medicine(): Prisma.MedicineDelegate<ExtArgs>;

  /**
   * `prisma.benefit`: Exposes CRUD operations for the **Benefit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Benefits
    * const benefits = await prisma.benefit.findMany()
    * ```
    */
  get benefit(): Prisma.BenefitDelegate<ExtArgs>;

  /**
   * `prisma.testimonial`: Exposes CRUD operations for the **Testimonial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonial.findMany()
    * ```
    */
  get testimonial(): Prisma.TestimonialDelegate<ExtArgs>;

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **Promotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotion.findMany()
    * ```
    */
  get promotion(): Prisma.PromotionDelegate<ExtArgs>;

  /**
   * `prisma.navigationItem`: Exposes CRUD operations for the **NavigationItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NavigationItems
    * const navigationItems = await prisma.navigationItem.findMany()
    * ```
    */
  get navigationItem(): Prisma.NavigationItemDelegate<ExtArgs>;

  /**
   * `prisma.whatsAppSettings`: Exposes CRUD operations for the **WhatsAppSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsAppSettings
    * const whatsAppSettings = await prisma.whatsAppSettings.findMany()
    * ```
    */
  get whatsAppSettings(): Prisma.WhatsAppSettingsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    SiteSettings: 'SiteSettings',
    ContactDetails: 'ContactDetails',
    AboutContent: 'AboutContent',
    AboutSection: 'AboutSection',
    AboutPhilosophyItem: 'AboutPhilosophyItem',
    AboutQualityItem: 'AboutQualityItem',
    AboutWhyChooseUsItem: 'AboutWhyChooseUsItem',
    AboutValueItem: 'AboutValueItem',
    AboutGalleryImage: 'AboutGalleryImage',
    AboutCertification: 'AboutCertification',
    Category: 'Category',
    Medicine: 'Medicine',
    Benefit: 'Benefit',
    Testimonial: 'Testimonial',
    Promotion: 'Promotion',
    NavigationItem: 'NavigationItem',
    WhatsAppSettings: 'WhatsAppSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "admin" | "siteSettings" | "contactDetails" | "aboutContent" | "aboutSection" | "aboutPhilosophyItem" | "aboutQualityItem" | "aboutWhyChooseUsItem" | "aboutValueItem" | "aboutGalleryImage" | "aboutCertification" | "category" | "medicine" | "benefit" | "testimonial" | "promotion" | "navigationItem" | "whatsAppSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      SiteSettings: {
        payload: Prisma.$SiteSettingsPayload<ExtArgs>
        fields: Prisma.SiteSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          findFirst: {
            args: Prisma.SiteSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          findMany: {
            args: Prisma.SiteSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>[]
          }
          create: {
            args: Prisma.SiteSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          createMany: {
            args: Prisma.SiteSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>[]
          }
          delete: {
            args: Prisma.SiteSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          update: {
            args: Prisma.SiteSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SiteSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SiteSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          aggregate: {
            args: Prisma.SiteSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteSettings>
          }
          groupBy: {
            args: Prisma.SiteSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingsCountAggregateOutputType> | number
          }
        }
      }
      ContactDetails: {
        payload: Prisma.$ContactDetailsPayload<ExtArgs>
        fields: Prisma.ContactDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDetailsPayload>
          }
          findFirst: {
            args: Prisma.ContactDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDetailsPayload>
          }
          findMany: {
            args: Prisma.ContactDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDetailsPayload>[]
          }
          create: {
            args: Prisma.ContactDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDetailsPayload>
          }
          createMany: {
            args: Prisma.ContactDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDetailsPayload>[]
          }
          delete: {
            args: Prisma.ContactDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDetailsPayload>
          }
          update: {
            args: Prisma.ContactDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDetailsPayload>
          }
          deleteMany: {
            args: Prisma.ContactDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDetailsPayload>
          }
          aggregate: {
            args: Prisma.ContactDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactDetails>
          }
          groupBy: {
            args: Prisma.ContactDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<ContactDetailsCountAggregateOutputType> | number
          }
        }
      }
      AboutContent: {
        payload: Prisma.$AboutContentPayload<ExtArgs>
        fields: Prisma.AboutContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          findFirst: {
            args: Prisma.AboutContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          findMany: {
            args: Prisma.AboutContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>[]
          }
          create: {
            args: Prisma.AboutContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          createMany: {
            args: Prisma.AboutContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>[]
          }
          delete: {
            args: Prisma.AboutContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          update: {
            args: Prisma.AboutContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          deleteMany: {
            args: Prisma.AboutContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AboutContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          aggregate: {
            args: Prisma.AboutContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutContent>
          }
          groupBy: {
            args: Prisma.AboutContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutContentCountArgs<ExtArgs>
            result: $Utils.Optional<AboutContentCountAggregateOutputType> | number
          }
        }
      }
      AboutSection: {
        payload: Prisma.$AboutSectionPayload<ExtArgs>
        fields: Prisma.AboutSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          findFirst: {
            args: Prisma.AboutSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          findMany: {
            args: Prisma.AboutSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>[]
          }
          create: {
            args: Prisma.AboutSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          createMany: {
            args: Prisma.AboutSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>[]
          }
          delete: {
            args: Prisma.AboutSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          update: {
            args: Prisma.AboutSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          deleteMany: {
            args: Prisma.AboutSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AboutSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          aggregate: {
            args: Prisma.AboutSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutSection>
          }
          groupBy: {
            args: Prisma.AboutSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutSectionCountArgs<ExtArgs>
            result: $Utils.Optional<AboutSectionCountAggregateOutputType> | number
          }
        }
      }
      AboutPhilosophyItem: {
        payload: Prisma.$AboutPhilosophyItemPayload<ExtArgs>
        fields: Prisma.AboutPhilosophyItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutPhilosophyItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPhilosophyItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutPhilosophyItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPhilosophyItemPayload>
          }
          findFirst: {
            args: Prisma.AboutPhilosophyItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPhilosophyItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutPhilosophyItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPhilosophyItemPayload>
          }
          findMany: {
            args: Prisma.AboutPhilosophyItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPhilosophyItemPayload>[]
          }
          create: {
            args: Prisma.AboutPhilosophyItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPhilosophyItemPayload>
          }
          createMany: {
            args: Prisma.AboutPhilosophyItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutPhilosophyItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPhilosophyItemPayload>[]
          }
          delete: {
            args: Prisma.AboutPhilosophyItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPhilosophyItemPayload>
          }
          update: {
            args: Prisma.AboutPhilosophyItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPhilosophyItemPayload>
          }
          deleteMany: {
            args: Prisma.AboutPhilosophyItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutPhilosophyItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AboutPhilosophyItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPhilosophyItemPayload>
          }
          aggregate: {
            args: Prisma.AboutPhilosophyItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutPhilosophyItem>
          }
          groupBy: {
            args: Prisma.AboutPhilosophyItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutPhilosophyItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutPhilosophyItemCountArgs<ExtArgs>
            result: $Utils.Optional<AboutPhilosophyItemCountAggregateOutputType> | number
          }
        }
      }
      AboutQualityItem: {
        payload: Prisma.$AboutQualityItemPayload<ExtArgs>
        fields: Prisma.AboutQualityItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutQualityItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutQualityItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutQualityItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutQualityItemPayload>
          }
          findFirst: {
            args: Prisma.AboutQualityItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutQualityItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutQualityItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutQualityItemPayload>
          }
          findMany: {
            args: Prisma.AboutQualityItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutQualityItemPayload>[]
          }
          create: {
            args: Prisma.AboutQualityItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutQualityItemPayload>
          }
          createMany: {
            args: Prisma.AboutQualityItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutQualityItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutQualityItemPayload>[]
          }
          delete: {
            args: Prisma.AboutQualityItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutQualityItemPayload>
          }
          update: {
            args: Prisma.AboutQualityItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutQualityItemPayload>
          }
          deleteMany: {
            args: Prisma.AboutQualityItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutQualityItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AboutQualityItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutQualityItemPayload>
          }
          aggregate: {
            args: Prisma.AboutQualityItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutQualityItem>
          }
          groupBy: {
            args: Prisma.AboutQualityItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutQualityItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutQualityItemCountArgs<ExtArgs>
            result: $Utils.Optional<AboutQualityItemCountAggregateOutputType> | number
          }
        }
      }
      AboutWhyChooseUsItem: {
        payload: Prisma.$AboutWhyChooseUsItemPayload<ExtArgs>
        fields: Prisma.AboutWhyChooseUsItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutWhyChooseUsItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutWhyChooseUsItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutWhyChooseUsItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutWhyChooseUsItemPayload>
          }
          findFirst: {
            args: Prisma.AboutWhyChooseUsItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutWhyChooseUsItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutWhyChooseUsItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutWhyChooseUsItemPayload>
          }
          findMany: {
            args: Prisma.AboutWhyChooseUsItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutWhyChooseUsItemPayload>[]
          }
          create: {
            args: Prisma.AboutWhyChooseUsItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutWhyChooseUsItemPayload>
          }
          createMany: {
            args: Prisma.AboutWhyChooseUsItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutWhyChooseUsItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutWhyChooseUsItemPayload>[]
          }
          delete: {
            args: Prisma.AboutWhyChooseUsItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutWhyChooseUsItemPayload>
          }
          update: {
            args: Prisma.AboutWhyChooseUsItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutWhyChooseUsItemPayload>
          }
          deleteMany: {
            args: Prisma.AboutWhyChooseUsItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutWhyChooseUsItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AboutWhyChooseUsItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutWhyChooseUsItemPayload>
          }
          aggregate: {
            args: Prisma.AboutWhyChooseUsItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutWhyChooseUsItem>
          }
          groupBy: {
            args: Prisma.AboutWhyChooseUsItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutWhyChooseUsItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutWhyChooseUsItemCountArgs<ExtArgs>
            result: $Utils.Optional<AboutWhyChooseUsItemCountAggregateOutputType> | number
          }
        }
      }
      AboutValueItem: {
        payload: Prisma.$AboutValueItemPayload<ExtArgs>
        fields: Prisma.AboutValueItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutValueItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutValueItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutValueItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutValueItemPayload>
          }
          findFirst: {
            args: Prisma.AboutValueItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutValueItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutValueItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutValueItemPayload>
          }
          findMany: {
            args: Prisma.AboutValueItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutValueItemPayload>[]
          }
          create: {
            args: Prisma.AboutValueItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutValueItemPayload>
          }
          createMany: {
            args: Prisma.AboutValueItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutValueItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutValueItemPayload>[]
          }
          delete: {
            args: Prisma.AboutValueItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutValueItemPayload>
          }
          update: {
            args: Prisma.AboutValueItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutValueItemPayload>
          }
          deleteMany: {
            args: Prisma.AboutValueItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutValueItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AboutValueItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutValueItemPayload>
          }
          aggregate: {
            args: Prisma.AboutValueItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutValueItem>
          }
          groupBy: {
            args: Prisma.AboutValueItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutValueItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutValueItemCountArgs<ExtArgs>
            result: $Utils.Optional<AboutValueItemCountAggregateOutputType> | number
          }
        }
      }
      AboutGalleryImage: {
        payload: Prisma.$AboutGalleryImagePayload<ExtArgs>
        fields: Prisma.AboutGalleryImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutGalleryImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutGalleryImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutGalleryImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutGalleryImagePayload>
          }
          findFirst: {
            args: Prisma.AboutGalleryImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutGalleryImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutGalleryImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutGalleryImagePayload>
          }
          findMany: {
            args: Prisma.AboutGalleryImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutGalleryImagePayload>[]
          }
          create: {
            args: Prisma.AboutGalleryImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutGalleryImagePayload>
          }
          createMany: {
            args: Prisma.AboutGalleryImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutGalleryImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutGalleryImagePayload>[]
          }
          delete: {
            args: Prisma.AboutGalleryImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutGalleryImagePayload>
          }
          update: {
            args: Prisma.AboutGalleryImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutGalleryImagePayload>
          }
          deleteMany: {
            args: Prisma.AboutGalleryImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutGalleryImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AboutGalleryImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutGalleryImagePayload>
          }
          aggregate: {
            args: Prisma.AboutGalleryImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutGalleryImage>
          }
          groupBy: {
            args: Prisma.AboutGalleryImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutGalleryImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutGalleryImageCountArgs<ExtArgs>
            result: $Utils.Optional<AboutGalleryImageCountAggregateOutputType> | number
          }
        }
      }
      AboutCertification: {
        payload: Prisma.$AboutCertificationPayload<ExtArgs>
        fields: Prisma.AboutCertificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutCertificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutCertificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutCertificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutCertificationPayload>
          }
          findFirst: {
            args: Prisma.AboutCertificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutCertificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutCertificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutCertificationPayload>
          }
          findMany: {
            args: Prisma.AboutCertificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutCertificationPayload>[]
          }
          create: {
            args: Prisma.AboutCertificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutCertificationPayload>
          }
          createMany: {
            args: Prisma.AboutCertificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutCertificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutCertificationPayload>[]
          }
          delete: {
            args: Prisma.AboutCertificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutCertificationPayload>
          }
          update: {
            args: Prisma.AboutCertificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutCertificationPayload>
          }
          deleteMany: {
            args: Prisma.AboutCertificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutCertificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AboutCertificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutCertificationPayload>
          }
          aggregate: {
            args: Prisma.AboutCertificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutCertification>
          }
          groupBy: {
            args: Prisma.AboutCertificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutCertificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutCertificationCountArgs<ExtArgs>
            result: $Utils.Optional<AboutCertificationCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Medicine: {
        payload: Prisma.$MedicinePayload<ExtArgs>
        fields: Prisma.MedicineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findFirst: {
            args: Prisma.MedicineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findMany: {
            args: Prisma.MedicineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          create: {
            args: Prisma.MedicineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          createMany: {
            args: Prisma.MedicineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          delete: {
            args: Prisma.MedicineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          update: {
            args: Prisma.MedicineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          deleteMany: {
            args: Prisma.MedicineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          aggregate: {
            args: Prisma.MedicineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicine>
          }
          groupBy: {
            args: Prisma.MedicineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineCountAggregateOutputType> | number
          }
        }
      }
      Benefit: {
        payload: Prisma.$BenefitPayload<ExtArgs>
        fields: Prisma.BenefitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BenefitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BenefitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          findFirst: {
            args: Prisma.BenefitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BenefitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          findMany: {
            args: Prisma.BenefitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          create: {
            args: Prisma.BenefitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          createMany: {
            args: Prisma.BenefitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BenefitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          delete: {
            args: Prisma.BenefitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          update: {
            args: Prisma.BenefitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          deleteMany: {
            args: Prisma.BenefitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BenefitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BenefitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          aggregate: {
            args: Prisma.BenefitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBenefit>
          }
          groupBy: {
            args: Prisma.BenefitGroupByArgs<ExtArgs>
            result: $Utils.Optional<BenefitGroupByOutputType>[]
          }
          count: {
            args: Prisma.BenefitCountArgs<ExtArgs>
            result: $Utils.Optional<BenefitCountAggregateOutputType> | number
          }
        }
      }
      Testimonial: {
        payload: Prisma.$TestimonialPayload<ExtArgs>
        fields: Prisma.TestimonialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestimonialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestimonialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          findFirst: {
            args: Prisma.TestimonialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestimonialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          findMany: {
            args: Prisma.TestimonialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          create: {
            args: Prisma.TestimonialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          createMany: {
            args: Prisma.TestimonialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestimonialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          delete: {
            args: Prisma.TestimonialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          update: {
            args: Prisma.TestimonialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          deleteMany: {
            args: Prisma.TestimonialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestimonialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestimonialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          aggregate: {
            args: Prisma.TestimonialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestimonial>
          }
          groupBy: {
            args: Prisma.TestimonialGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestimonialGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestimonialCountArgs<ExtArgs>
            result: $Utils.Optional<TestimonialCountAggregateOutputType> | number
          }
        }
      }
      Promotion: {
        payload: Prisma.$PromotionPayload<ExtArgs>
        fields: Prisma.PromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findFirst: {
            args: Prisma.PromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findMany: {
            args: Prisma.PromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          create: {
            args: Prisma.PromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          createMany: {
            args: Prisma.PromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromotionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          delete: {
            args: Prisma.PromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          update: {
            args: Prisma.PromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          deleteMany: {
            args: Prisma.PromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          aggregate: {
            args: Prisma.PromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotion>
          }
          groupBy: {
            args: Prisma.PromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotionCountArgs<ExtArgs>
            result: $Utils.Optional<PromotionCountAggregateOutputType> | number
          }
        }
      }
      NavigationItem: {
        payload: Prisma.$NavigationItemPayload<ExtArgs>
        fields: Prisma.NavigationItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NavigationItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NavigationItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          findFirst: {
            args: Prisma.NavigationItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NavigationItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          findMany: {
            args: Prisma.NavigationItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>[]
          }
          create: {
            args: Prisma.NavigationItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          createMany: {
            args: Prisma.NavigationItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NavigationItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>[]
          }
          delete: {
            args: Prisma.NavigationItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          update: {
            args: Prisma.NavigationItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          deleteMany: {
            args: Prisma.NavigationItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NavigationItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NavigationItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          aggregate: {
            args: Prisma.NavigationItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNavigationItem>
          }
          groupBy: {
            args: Prisma.NavigationItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<NavigationItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.NavigationItemCountArgs<ExtArgs>
            result: $Utils.Optional<NavigationItemCountAggregateOutputType> | number
          }
        }
      }
      WhatsAppSettings: {
        payload: Prisma.$WhatsAppSettingsPayload<ExtArgs>
        fields: Prisma.WhatsAppSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsAppSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsAppSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSettingsPayload>
          }
          findFirst: {
            args: Prisma.WhatsAppSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsAppSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSettingsPayload>
          }
          findMany: {
            args: Prisma.WhatsAppSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSettingsPayload>[]
          }
          create: {
            args: Prisma.WhatsAppSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSettingsPayload>
          }
          createMany: {
            args: Prisma.WhatsAppSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhatsAppSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSettingsPayload>[]
          }
          delete: {
            args: Prisma.WhatsAppSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSettingsPayload>
          }
          update: {
            args: Prisma.WhatsAppSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSettingsPayload>
          }
          deleteMany: {
            args: Prisma.WhatsAppSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsAppSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WhatsAppSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSettingsPayload>
          }
          aggregate: {
            args: Prisma.WhatsAppSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsAppSettings>
          }
          groupBy: {
            args: Prisma.WhatsAppSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsAppSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppSettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    medicines: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicines?: boolean | CategoryCountOutputTypeCountMedicinesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountMedicinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineWhereInput
  }


  /**
   * Count Type MedicineCountOutputType
   */

  export type MedicineCountOutputType = {
    categories: number
  }

  export type MedicineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | MedicineCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineCountOutputType
     */
    select?: MedicineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    email: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly passwordHash: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
  }


  /**
   * Model SiteSettings
   */

  export type AggregateSiteSettings = {
    _count: SiteSettingsCountAggregateOutputType | null
    _avg: SiteSettingsAvgAggregateOutputType | null
    _sum: SiteSettingsSumAggregateOutputType | null
    _min: SiteSettingsMinAggregateOutputType | null
    _max: SiteSettingsMaxAggregateOutputType | null
  }

  export type SiteSettingsAvgAggregateOutputType = {
    id: number | null
  }

  export type SiteSettingsSumAggregateOutputType = {
    id: number | null
  }

  export type SiteSettingsMinAggregateOutputType = {
    id: number | null
    businessName: string | null
    logoUrl: string | null
    faviconUrl: string | null
    heroTitle: string | null
    heroSubtitle: string | null
    heroImageUrl: string | null
    heroButtonText: string | null
    heroButtonLink: string | null
    heroVisible: boolean | null
    aboutIntro: string | null
    footerText: string | null
    updatedAt: Date | null
  }

  export type SiteSettingsMaxAggregateOutputType = {
    id: number | null
    businessName: string | null
    logoUrl: string | null
    faviconUrl: string | null
    heroTitle: string | null
    heroSubtitle: string | null
    heroImageUrl: string | null
    heroButtonText: string | null
    heroButtonLink: string | null
    heroVisible: boolean | null
    aboutIntro: string | null
    footerText: string | null
    updatedAt: Date | null
  }

  export type SiteSettingsCountAggregateOutputType = {
    id: number
    businessName: number
    logoUrl: number
    faviconUrl: number
    heroTitle: number
    heroSubtitle: number
    heroImageUrl: number
    heroButtonText: number
    heroButtonLink: number
    heroVisible: number
    aboutIntro: number
    footerText: number
    updatedAt: number
    _all: number
  }


  export type SiteSettingsAvgAggregateInputType = {
    id?: true
  }

  export type SiteSettingsSumAggregateInputType = {
    id?: true
  }

  export type SiteSettingsMinAggregateInputType = {
    id?: true
    businessName?: true
    logoUrl?: true
    faviconUrl?: true
    heroTitle?: true
    heroSubtitle?: true
    heroImageUrl?: true
    heroButtonText?: true
    heroButtonLink?: true
    heroVisible?: true
    aboutIntro?: true
    footerText?: true
    updatedAt?: true
  }

  export type SiteSettingsMaxAggregateInputType = {
    id?: true
    businessName?: true
    logoUrl?: true
    faviconUrl?: true
    heroTitle?: true
    heroSubtitle?: true
    heroImageUrl?: true
    heroButtonText?: true
    heroButtonLink?: true
    heroVisible?: true
    aboutIntro?: true
    footerText?: true
    updatedAt?: true
  }

  export type SiteSettingsCountAggregateInputType = {
    id?: true
    businessName?: true
    logoUrl?: true
    faviconUrl?: true
    heroTitle?: true
    heroSubtitle?: true
    heroImageUrl?: true
    heroButtonText?: true
    heroButtonLink?: true
    heroVisible?: true
    aboutIntro?: true
    footerText?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettings to aggregate.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteSettings
    **/
    _count?: true | SiteSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteSettingsMaxAggregateInputType
  }

  export type GetSiteSettingsAggregateType<T extends SiteSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteSettings[P]>
      : GetScalarType<T[P], AggregateSiteSettings[P]>
  }




  export type SiteSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteSettingsWhereInput
    orderBy?: SiteSettingsOrderByWithAggregationInput | SiteSettingsOrderByWithAggregationInput[]
    by: SiteSettingsScalarFieldEnum[] | SiteSettingsScalarFieldEnum
    having?: SiteSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteSettingsCountAggregateInputType | true
    _avg?: SiteSettingsAvgAggregateInputType
    _sum?: SiteSettingsSumAggregateInputType
    _min?: SiteSettingsMinAggregateInputType
    _max?: SiteSettingsMaxAggregateInputType
  }

  export type SiteSettingsGroupByOutputType = {
    id: number
    businessName: string
    logoUrl: string | null
    faviconUrl: string | null
    heroTitle: string
    heroSubtitle: string
    heroImageUrl: string | null
    heroButtonText: string
    heroButtonLink: string
    heroVisible: boolean
    aboutIntro: string
    footerText: string
    updatedAt: Date
    _count: SiteSettingsCountAggregateOutputType | null
    _avg: SiteSettingsAvgAggregateOutputType | null
    _sum: SiteSettingsSumAggregateOutputType | null
    _min: SiteSettingsMinAggregateOutputType | null
    _max: SiteSettingsMaxAggregateOutputType | null
  }

  type GetSiteSettingsGroupByPayload<T extends SiteSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SiteSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SiteSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessName?: boolean
    logoUrl?: boolean
    faviconUrl?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    heroImageUrl?: boolean
    heroButtonText?: boolean
    heroButtonLink?: boolean
    heroVisible?: boolean
    aboutIntro?: boolean
    footerText?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSettings"]>

  export type SiteSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessName?: boolean
    logoUrl?: boolean
    faviconUrl?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    heroImageUrl?: boolean
    heroButtonText?: boolean
    heroButtonLink?: boolean
    heroVisible?: boolean
    aboutIntro?: boolean
    footerText?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSettings"]>

  export type SiteSettingsSelectScalar = {
    id?: boolean
    businessName?: boolean
    logoUrl?: boolean
    faviconUrl?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    heroImageUrl?: boolean
    heroButtonText?: boolean
    heroButtonLink?: boolean
    heroVisible?: boolean
    aboutIntro?: boolean
    footerText?: boolean
    updatedAt?: boolean
  }


  export type $SiteSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      businessName: string
      logoUrl: string | null
      faviconUrl: string | null
      heroTitle: string
      heroSubtitle: string
      heroImageUrl: string | null
      heroButtonText: string
      heroButtonLink: string
      heroVisible: boolean
      aboutIntro: string
      footerText: string
      updatedAt: Date
    }, ExtArgs["result"]["siteSettings"]>
    composites: {}
  }

  type SiteSettingsGetPayload<S extends boolean | null | undefined | SiteSettingsDefaultArgs> = $Result.GetResult<Prisma.$SiteSettingsPayload, S>

  type SiteSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SiteSettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SiteSettingsCountAggregateInputType | true
    }

  export interface SiteSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteSettings'], meta: { name: 'SiteSettings' } }
    /**
     * Find zero or one SiteSettings that matches the filter.
     * @param {SiteSettingsFindUniqueArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteSettingsFindUniqueArgs>(args: SelectSubset<T, SiteSettingsFindUniqueArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SiteSettings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SiteSettingsFindUniqueOrThrowArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SiteSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsFindFirstArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteSettingsFindFirstArgs>(args?: SelectSubset<T, SiteSettingsFindFirstArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SiteSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsFindFirstOrThrowArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SiteSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteSettings
     * const siteSettings = await prisma.siteSettings.findMany()
     * 
     * // Get first 10 SiteSettings
     * const siteSettings = await prisma.siteSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteSettingsWithIdOnly = await prisma.siteSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteSettingsFindManyArgs>(args?: SelectSubset<T, SiteSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SiteSettings.
     * @param {SiteSettingsCreateArgs} args - Arguments to create a SiteSettings.
     * @example
     * // Create one SiteSettings
     * const SiteSettings = await prisma.siteSettings.create({
     *   data: {
     *     // ... data to create a SiteSettings
     *   }
     * })
     * 
     */
    create<T extends SiteSettingsCreateArgs>(args: SelectSubset<T, SiteSettingsCreateArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SiteSettings.
     * @param {SiteSettingsCreateManyArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSettings = await prisma.siteSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteSettingsCreateManyArgs>(args?: SelectSubset<T, SiteSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteSettings and returns the data saved in the database.
     * @param {SiteSettingsCreateManyAndReturnArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSettings = await prisma.siteSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteSettings and only return the `id`
     * const siteSettingsWithIdOnly = await prisma.siteSettings.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SiteSettings.
     * @param {SiteSettingsDeleteArgs} args - Arguments to delete one SiteSettings.
     * @example
     * // Delete one SiteSettings
     * const SiteSettings = await prisma.siteSettings.delete({
     *   where: {
     *     // ... filter to delete one SiteSettings
     *   }
     * })
     * 
     */
    delete<T extends SiteSettingsDeleteArgs>(args: SelectSubset<T, SiteSettingsDeleteArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SiteSettings.
     * @param {SiteSettingsUpdateArgs} args - Arguments to update one SiteSettings.
     * @example
     * // Update one SiteSettings
     * const siteSettings = await prisma.siteSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteSettingsUpdateArgs>(args: SelectSubset<T, SiteSettingsUpdateArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SiteSettings.
     * @param {SiteSettingsDeleteManyArgs} args - Arguments to filter SiteSettings to delete.
     * @example
     * // Delete a few SiteSettings
     * const { count } = await prisma.siteSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteSettingsDeleteManyArgs>(args?: SelectSubset<T, SiteSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteSettings
     * const siteSettings = await prisma.siteSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteSettingsUpdateManyArgs>(args: SelectSubset<T, SiteSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SiteSettings.
     * @param {SiteSettingsUpsertArgs} args - Arguments to update or create a SiteSettings.
     * @example
     * // Update or create a SiteSettings
     * const siteSettings = await prisma.siteSettings.upsert({
     *   create: {
     *     // ... data to create a SiteSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteSettings we want to update
     *   }
     * })
     */
    upsert<T extends SiteSettingsUpsertArgs>(args: SelectSubset<T, SiteSettingsUpsertArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsCountArgs} args - Arguments to filter SiteSettings to count.
     * @example
     * // Count the number of SiteSettings
     * const count = await prisma.siteSettings.count({
     *   where: {
     *     // ... the filter for the SiteSettings we want to count
     *   }
     * })
    **/
    count<T extends SiteSettingsCountArgs>(
      args?: Subset<T, SiteSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteSettingsAggregateArgs>(args: Subset<T, SiteSettingsAggregateArgs>): Prisma.PrismaPromise<GetSiteSettingsAggregateType<T>>

    /**
     * Group by SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SiteSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteSettings model
   */
  readonly fields: SiteSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteSettings model
   */ 
  interface SiteSettingsFieldRefs {
    readonly id: FieldRef<"SiteSettings", 'Int'>
    readonly businessName: FieldRef<"SiteSettings", 'String'>
    readonly logoUrl: FieldRef<"SiteSettings", 'String'>
    readonly faviconUrl: FieldRef<"SiteSettings", 'String'>
    readonly heroTitle: FieldRef<"SiteSettings", 'String'>
    readonly heroSubtitle: FieldRef<"SiteSettings", 'String'>
    readonly heroImageUrl: FieldRef<"SiteSettings", 'String'>
    readonly heroButtonText: FieldRef<"SiteSettings", 'String'>
    readonly heroButtonLink: FieldRef<"SiteSettings", 'String'>
    readonly heroVisible: FieldRef<"SiteSettings", 'Boolean'>
    readonly aboutIntro: FieldRef<"SiteSettings", 'String'>
    readonly footerText: FieldRef<"SiteSettings", 'String'>
    readonly updatedAt: FieldRef<"SiteSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteSettings findUnique
   */
  export type SiteSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings findUniqueOrThrow
   */
  export type SiteSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings findFirst
   */
  export type SiteSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingsScalarFieldEnum | SiteSettingsScalarFieldEnum[]
  }

  /**
   * SiteSettings findFirstOrThrow
   */
  export type SiteSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingsScalarFieldEnum | SiteSettingsScalarFieldEnum[]
  }

  /**
   * SiteSettings findMany
   */
  export type SiteSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteSettings.
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    distinct?: SiteSettingsScalarFieldEnum | SiteSettingsScalarFieldEnum[]
  }

  /**
   * SiteSettings create
   */
  export type SiteSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * The data needed to create a SiteSettings.
     */
    data: XOR<SiteSettingsCreateInput, SiteSettingsUncheckedCreateInput>
  }

  /**
   * SiteSettings createMany
   */
  export type SiteSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingsCreateManyInput | SiteSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteSettings createManyAndReturn
   */
  export type SiteSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingsCreateManyInput | SiteSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteSettings update
   */
  export type SiteSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * The data needed to update a SiteSettings.
     */
    data: XOR<SiteSettingsUpdateInput, SiteSettingsUncheckedUpdateInput>
    /**
     * Choose, which SiteSettings to update.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings updateMany
   */
  export type SiteSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteSettings.
     */
    data: XOR<SiteSettingsUpdateManyMutationInput, SiteSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SiteSettings to update
     */
    where?: SiteSettingsWhereInput
  }

  /**
   * SiteSettings upsert
   */
  export type SiteSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * The filter to search for the SiteSettings to update in case it exists.
     */
    where: SiteSettingsWhereUniqueInput
    /**
     * In case the SiteSettings found by the `where` argument doesn't exist, create a new SiteSettings with this data.
     */
    create: XOR<SiteSettingsCreateInput, SiteSettingsUncheckedCreateInput>
    /**
     * In case the SiteSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteSettingsUpdateInput, SiteSettingsUncheckedUpdateInput>
  }

  /**
   * SiteSettings delete
   */
  export type SiteSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Filter which SiteSettings to delete.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings deleteMany
   */
  export type SiteSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettings to delete
     */
    where?: SiteSettingsWhereInput
  }

  /**
   * SiteSettings without action
   */
  export type SiteSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
  }


  /**
   * Model ContactDetails
   */

  export type AggregateContactDetails = {
    _count: ContactDetailsCountAggregateOutputType | null
    _avg: ContactDetailsAvgAggregateOutputType | null
    _sum: ContactDetailsSumAggregateOutputType | null
    _min: ContactDetailsMinAggregateOutputType | null
    _max: ContactDetailsMaxAggregateOutputType | null
  }

  export type ContactDetailsAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactDetailsSumAggregateOutputType = {
    id: number | null
  }

  export type ContactDetailsMinAggregateOutputType = {
    id: number | null
    businessName: string | null
    address: string | null
    phone: string | null
    whatsapp: string | null
    email: string | null
    googleMapsLink: string | null
    openingHours: string | null
    instagramUrl: string | null
    facebookUrl: string | null
    twitterUrl: string | null
    updatedAt: Date | null
  }

  export type ContactDetailsMaxAggregateOutputType = {
    id: number | null
    businessName: string | null
    address: string | null
    phone: string | null
    whatsapp: string | null
    email: string | null
    googleMapsLink: string | null
    openingHours: string | null
    instagramUrl: string | null
    facebookUrl: string | null
    twitterUrl: string | null
    updatedAt: Date | null
  }

  export type ContactDetailsCountAggregateOutputType = {
    id: number
    businessName: number
    address: number
    phone: number
    whatsapp: number
    email: number
    googleMapsLink: number
    openingHours: number
    instagramUrl: number
    facebookUrl: number
    twitterUrl: number
    updatedAt: number
    _all: number
  }


  export type ContactDetailsAvgAggregateInputType = {
    id?: true
  }

  export type ContactDetailsSumAggregateInputType = {
    id?: true
  }

  export type ContactDetailsMinAggregateInputType = {
    id?: true
    businessName?: true
    address?: true
    phone?: true
    whatsapp?: true
    email?: true
    googleMapsLink?: true
    openingHours?: true
    instagramUrl?: true
    facebookUrl?: true
    twitterUrl?: true
    updatedAt?: true
  }

  export type ContactDetailsMaxAggregateInputType = {
    id?: true
    businessName?: true
    address?: true
    phone?: true
    whatsapp?: true
    email?: true
    googleMapsLink?: true
    openingHours?: true
    instagramUrl?: true
    facebookUrl?: true
    twitterUrl?: true
    updatedAt?: true
  }

  export type ContactDetailsCountAggregateInputType = {
    id?: true
    businessName?: true
    address?: true
    phone?: true
    whatsapp?: true
    email?: true
    googleMapsLink?: true
    openingHours?: true
    instagramUrl?: true
    facebookUrl?: true
    twitterUrl?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactDetails to aggregate.
     */
    where?: ContactDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactDetails to fetch.
     */
    orderBy?: ContactDetailsOrderByWithRelationInput | ContactDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactDetails
    **/
    _count?: true | ContactDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactDetailsMaxAggregateInputType
  }

  export type GetContactDetailsAggregateType<T extends ContactDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateContactDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactDetails[P]>
      : GetScalarType<T[P], AggregateContactDetails[P]>
  }




  export type ContactDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactDetailsWhereInput
    orderBy?: ContactDetailsOrderByWithAggregationInput | ContactDetailsOrderByWithAggregationInput[]
    by: ContactDetailsScalarFieldEnum[] | ContactDetailsScalarFieldEnum
    having?: ContactDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactDetailsCountAggregateInputType | true
    _avg?: ContactDetailsAvgAggregateInputType
    _sum?: ContactDetailsSumAggregateInputType
    _min?: ContactDetailsMinAggregateInputType
    _max?: ContactDetailsMaxAggregateInputType
  }

  export type ContactDetailsGroupByOutputType = {
    id: number
    businessName: string
    address: string
    phone: string
    whatsapp: string
    email: string
    googleMapsLink: string
    openingHours: string
    instagramUrl: string | null
    facebookUrl: string | null
    twitterUrl: string | null
    updatedAt: Date
    _count: ContactDetailsCountAggregateOutputType | null
    _avg: ContactDetailsAvgAggregateOutputType | null
    _sum: ContactDetailsSumAggregateOutputType | null
    _min: ContactDetailsMinAggregateOutputType | null
    _max: ContactDetailsMaxAggregateOutputType | null
  }

  type GetContactDetailsGroupByPayload<T extends ContactDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactDetailsGroupByOutputType[P]>
        }
      >
    >


  export type ContactDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessName?: boolean
    address?: boolean
    phone?: boolean
    whatsapp?: boolean
    email?: boolean
    googleMapsLink?: boolean
    openingHours?: boolean
    instagramUrl?: boolean
    facebookUrl?: boolean
    twitterUrl?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactDetails"]>

  export type ContactDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessName?: boolean
    address?: boolean
    phone?: boolean
    whatsapp?: boolean
    email?: boolean
    googleMapsLink?: boolean
    openingHours?: boolean
    instagramUrl?: boolean
    facebookUrl?: boolean
    twitterUrl?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactDetails"]>

  export type ContactDetailsSelectScalar = {
    id?: boolean
    businessName?: boolean
    address?: boolean
    phone?: boolean
    whatsapp?: boolean
    email?: boolean
    googleMapsLink?: boolean
    openingHours?: boolean
    instagramUrl?: boolean
    facebookUrl?: boolean
    twitterUrl?: boolean
    updatedAt?: boolean
  }


  export type $ContactDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactDetails"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      businessName: string
      address: string
      phone: string
      whatsapp: string
      email: string
      googleMapsLink: string
      openingHours: string
      instagramUrl: string | null
      facebookUrl: string | null
      twitterUrl: string | null
      updatedAt: Date
    }, ExtArgs["result"]["contactDetails"]>
    composites: {}
  }

  type ContactDetailsGetPayload<S extends boolean | null | undefined | ContactDetailsDefaultArgs> = $Result.GetResult<Prisma.$ContactDetailsPayload, S>

  type ContactDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactDetailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactDetailsCountAggregateInputType | true
    }

  export interface ContactDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactDetails'], meta: { name: 'ContactDetails' } }
    /**
     * Find zero or one ContactDetails that matches the filter.
     * @param {ContactDetailsFindUniqueArgs} args - Arguments to find a ContactDetails
     * @example
     * // Get one ContactDetails
     * const contactDetails = await prisma.contactDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactDetailsFindUniqueArgs>(args: SelectSubset<T, ContactDetailsFindUniqueArgs<ExtArgs>>): Prisma__ContactDetailsClient<$Result.GetResult<Prisma.$ContactDetailsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ContactDetails that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContactDetailsFindUniqueOrThrowArgs} args - Arguments to find a ContactDetails
     * @example
     * // Get one ContactDetails
     * const contactDetails = await prisma.contactDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactDetailsClient<$Result.GetResult<Prisma.$ContactDetailsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ContactDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactDetailsFindFirstArgs} args - Arguments to find a ContactDetails
     * @example
     * // Get one ContactDetails
     * const contactDetails = await prisma.contactDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactDetailsFindFirstArgs>(args?: SelectSubset<T, ContactDetailsFindFirstArgs<ExtArgs>>): Prisma__ContactDetailsClient<$Result.GetResult<Prisma.$ContactDetailsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ContactDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactDetailsFindFirstOrThrowArgs} args - Arguments to find a ContactDetails
     * @example
     * // Get one ContactDetails
     * const contactDetails = await prisma.contactDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactDetailsClient<$Result.GetResult<Prisma.$ContactDetailsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ContactDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactDetails
     * const contactDetails = await prisma.contactDetails.findMany()
     * 
     * // Get first 10 ContactDetails
     * const contactDetails = await prisma.contactDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactDetailsWithIdOnly = await prisma.contactDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactDetailsFindManyArgs>(args?: SelectSubset<T, ContactDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactDetailsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ContactDetails.
     * @param {ContactDetailsCreateArgs} args - Arguments to create a ContactDetails.
     * @example
     * // Create one ContactDetails
     * const ContactDetails = await prisma.contactDetails.create({
     *   data: {
     *     // ... data to create a ContactDetails
     *   }
     * })
     * 
     */
    create<T extends ContactDetailsCreateArgs>(args: SelectSubset<T, ContactDetailsCreateArgs<ExtArgs>>): Prisma__ContactDetailsClient<$Result.GetResult<Prisma.$ContactDetailsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ContactDetails.
     * @param {ContactDetailsCreateManyArgs} args - Arguments to create many ContactDetails.
     * @example
     * // Create many ContactDetails
     * const contactDetails = await prisma.contactDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactDetailsCreateManyArgs>(args?: SelectSubset<T, ContactDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactDetails and returns the data saved in the database.
     * @param {ContactDetailsCreateManyAndReturnArgs} args - Arguments to create many ContactDetails.
     * @example
     * // Create many ContactDetails
     * const contactDetails = await prisma.contactDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactDetails and only return the `id`
     * const contactDetailsWithIdOnly = await prisma.contactDetails.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactDetailsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ContactDetails.
     * @param {ContactDetailsDeleteArgs} args - Arguments to delete one ContactDetails.
     * @example
     * // Delete one ContactDetails
     * const ContactDetails = await prisma.contactDetails.delete({
     *   where: {
     *     // ... filter to delete one ContactDetails
     *   }
     * })
     * 
     */
    delete<T extends ContactDetailsDeleteArgs>(args: SelectSubset<T, ContactDetailsDeleteArgs<ExtArgs>>): Prisma__ContactDetailsClient<$Result.GetResult<Prisma.$ContactDetailsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ContactDetails.
     * @param {ContactDetailsUpdateArgs} args - Arguments to update one ContactDetails.
     * @example
     * // Update one ContactDetails
     * const contactDetails = await prisma.contactDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactDetailsUpdateArgs>(args: SelectSubset<T, ContactDetailsUpdateArgs<ExtArgs>>): Prisma__ContactDetailsClient<$Result.GetResult<Prisma.$ContactDetailsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ContactDetails.
     * @param {ContactDetailsDeleteManyArgs} args - Arguments to filter ContactDetails to delete.
     * @example
     * // Delete a few ContactDetails
     * const { count } = await prisma.contactDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDetailsDeleteManyArgs>(args?: SelectSubset<T, ContactDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactDetails
     * const contactDetails = await prisma.contactDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactDetailsUpdateManyArgs>(args: SelectSubset<T, ContactDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactDetails.
     * @param {ContactDetailsUpsertArgs} args - Arguments to update or create a ContactDetails.
     * @example
     * // Update or create a ContactDetails
     * const contactDetails = await prisma.contactDetails.upsert({
     *   create: {
     *     // ... data to create a ContactDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactDetails we want to update
     *   }
     * })
     */
    upsert<T extends ContactDetailsUpsertArgs>(args: SelectSubset<T, ContactDetailsUpsertArgs<ExtArgs>>): Prisma__ContactDetailsClient<$Result.GetResult<Prisma.$ContactDetailsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ContactDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactDetailsCountArgs} args - Arguments to filter ContactDetails to count.
     * @example
     * // Count the number of ContactDetails
     * const count = await prisma.contactDetails.count({
     *   where: {
     *     // ... the filter for the ContactDetails we want to count
     *   }
     * })
    **/
    count<T extends ContactDetailsCountArgs>(
      args?: Subset<T, ContactDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactDetailsAggregateArgs>(args: Subset<T, ContactDetailsAggregateArgs>): Prisma.PrismaPromise<GetContactDetailsAggregateType<T>>

    /**
     * Group by ContactDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactDetailsGroupByArgs['orderBy'] }
        : { orderBy?: ContactDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactDetails model
   */
  readonly fields: ContactDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactDetails model
   */ 
  interface ContactDetailsFieldRefs {
    readonly id: FieldRef<"ContactDetails", 'Int'>
    readonly businessName: FieldRef<"ContactDetails", 'String'>
    readonly address: FieldRef<"ContactDetails", 'String'>
    readonly phone: FieldRef<"ContactDetails", 'String'>
    readonly whatsapp: FieldRef<"ContactDetails", 'String'>
    readonly email: FieldRef<"ContactDetails", 'String'>
    readonly googleMapsLink: FieldRef<"ContactDetails", 'String'>
    readonly openingHours: FieldRef<"ContactDetails", 'String'>
    readonly instagramUrl: FieldRef<"ContactDetails", 'String'>
    readonly facebookUrl: FieldRef<"ContactDetails", 'String'>
    readonly twitterUrl: FieldRef<"ContactDetails", 'String'>
    readonly updatedAt: FieldRef<"ContactDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactDetails findUnique
   */
  export type ContactDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactDetails
     */
    select?: ContactDetailsSelect<ExtArgs> | null
    /**
     * Filter, which ContactDetails to fetch.
     */
    where: ContactDetailsWhereUniqueInput
  }

  /**
   * ContactDetails findUniqueOrThrow
   */
  export type ContactDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactDetails
     */
    select?: ContactDetailsSelect<ExtArgs> | null
    /**
     * Filter, which ContactDetails to fetch.
     */
    where: ContactDetailsWhereUniqueInput
  }

  /**
   * ContactDetails findFirst
   */
  export type ContactDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactDetails
     */
    select?: ContactDetailsSelect<ExtArgs> | null
    /**
     * Filter, which ContactDetails to fetch.
     */
    where?: ContactDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactDetails to fetch.
     */
    orderBy?: ContactDetailsOrderByWithRelationInput | ContactDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactDetails.
     */
    cursor?: ContactDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactDetails.
     */
    distinct?: ContactDetailsScalarFieldEnum | ContactDetailsScalarFieldEnum[]
  }

  /**
   * ContactDetails findFirstOrThrow
   */
  export type ContactDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactDetails
     */
    select?: ContactDetailsSelect<ExtArgs> | null
    /**
     * Filter, which ContactDetails to fetch.
     */
    where?: ContactDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactDetails to fetch.
     */
    orderBy?: ContactDetailsOrderByWithRelationInput | ContactDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactDetails.
     */
    cursor?: ContactDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactDetails.
     */
    distinct?: ContactDetailsScalarFieldEnum | ContactDetailsScalarFieldEnum[]
  }

  /**
   * ContactDetails findMany
   */
  export type ContactDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactDetails
     */
    select?: ContactDetailsSelect<ExtArgs> | null
    /**
     * Filter, which ContactDetails to fetch.
     */
    where?: ContactDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactDetails to fetch.
     */
    orderBy?: ContactDetailsOrderByWithRelationInput | ContactDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactDetails.
     */
    cursor?: ContactDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactDetails.
     */
    skip?: number
    distinct?: ContactDetailsScalarFieldEnum | ContactDetailsScalarFieldEnum[]
  }

  /**
   * ContactDetails create
   */
  export type ContactDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactDetails
     */
    select?: ContactDetailsSelect<ExtArgs> | null
    /**
     * The data needed to create a ContactDetails.
     */
    data: XOR<ContactDetailsCreateInput, ContactDetailsUncheckedCreateInput>
  }

  /**
   * ContactDetails createMany
   */
  export type ContactDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactDetails.
     */
    data: ContactDetailsCreateManyInput | ContactDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactDetails createManyAndReturn
   */
  export type ContactDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactDetails
     */
    select?: ContactDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ContactDetails.
     */
    data: ContactDetailsCreateManyInput | ContactDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactDetails update
   */
  export type ContactDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactDetails
     */
    select?: ContactDetailsSelect<ExtArgs> | null
    /**
     * The data needed to update a ContactDetails.
     */
    data: XOR<ContactDetailsUpdateInput, ContactDetailsUncheckedUpdateInput>
    /**
     * Choose, which ContactDetails to update.
     */
    where: ContactDetailsWhereUniqueInput
  }

  /**
   * ContactDetails updateMany
   */
  export type ContactDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactDetails.
     */
    data: XOR<ContactDetailsUpdateManyMutationInput, ContactDetailsUncheckedUpdateManyInput>
    /**
     * Filter which ContactDetails to update
     */
    where?: ContactDetailsWhereInput
  }

  /**
   * ContactDetails upsert
   */
  export type ContactDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactDetails
     */
    select?: ContactDetailsSelect<ExtArgs> | null
    /**
     * The filter to search for the ContactDetails to update in case it exists.
     */
    where: ContactDetailsWhereUniqueInput
    /**
     * In case the ContactDetails found by the `where` argument doesn't exist, create a new ContactDetails with this data.
     */
    create: XOR<ContactDetailsCreateInput, ContactDetailsUncheckedCreateInput>
    /**
     * In case the ContactDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactDetailsUpdateInput, ContactDetailsUncheckedUpdateInput>
  }

  /**
   * ContactDetails delete
   */
  export type ContactDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactDetails
     */
    select?: ContactDetailsSelect<ExtArgs> | null
    /**
     * Filter which ContactDetails to delete.
     */
    where: ContactDetailsWhereUniqueInput
  }

  /**
   * ContactDetails deleteMany
   */
  export type ContactDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactDetails to delete
     */
    where?: ContactDetailsWhereInput
  }

  /**
   * ContactDetails without action
   */
  export type ContactDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactDetails
     */
    select?: ContactDetailsSelect<ExtArgs> | null
  }


  /**
   * Model AboutContent
   */

  export type AggregateAboutContent = {
    _count: AboutContentCountAggregateOutputType | null
    _avg: AboutContentAvgAggregateOutputType | null
    _sum: AboutContentSumAggregateOutputType | null
    _min: AboutContentMinAggregateOutputType | null
    _max: AboutContentMaxAggregateOutputType | null
  }

  export type AboutContentAvgAggregateOutputType = {
    id: number | null
  }

  export type AboutContentSumAggregateOutputType = {
    id: number | null
  }

  export type AboutContentMinAggregateOutputType = {
    id: number | null
    heading: string | null
    aboutIntro: string | null
    ourStory: string | null
    storyImageUrl: string | null
    mission: string | null
    vision: string | null
    philosophyIntro: string | null
    qualityIntro: string | null
    whyChooseUsIntro: string | null
    valuesIntro: string | null
    galleryTitle: string | null
    galleryIntro: string | null
    certificationsTitle: string | null
    certificationsIntro: string | null
    certificationsEnabled: boolean | null
    ctaTitle: string | null
    ctaButtonText: string | null
    ctaButtonLink: string | null
    ctaWhatsAppText: string | null
    isEnabled: boolean | null
    updatedAt: Date | null
    philosophy: string | null
    qualityInfo: string | null
    whyChooseUs: string | null
    additionalContent: string | null
    imageUrl: string | null
  }

  export type AboutContentMaxAggregateOutputType = {
    id: number | null
    heading: string | null
    aboutIntro: string | null
    ourStory: string | null
    storyImageUrl: string | null
    mission: string | null
    vision: string | null
    philosophyIntro: string | null
    qualityIntro: string | null
    whyChooseUsIntro: string | null
    valuesIntro: string | null
    galleryTitle: string | null
    galleryIntro: string | null
    certificationsTitle: string | null
    certificationsIntro: string | null
    certificationsEnabled: boolean | null
    ctaTitle: string | null
    ctaButtonText: string | null
    ctaButtonLink: string | null
    ctaWhatsAppText: string | null
    isEnabled: boolean | null
    updatedAt: Date | null
    philosophy: string | null
    qualityInfo: string | null
    whyChooseUs: string | null
    additionalContent: string | null
    imageUrl: string | null
  }

  export type AboutContentCountAggregateOutputType = {
    id: number
    heading: number
    aboutIntro: number
    ourStory: number
    storyImageUrl: number
    mission: number
    vision: number
    philosophyIntro: number
    qualityIntro: number
    whyChooseUsIntro: number
    valuesIntro: number
    galleryTitle: number
    galleryIntro: number
    certificationsTitle: number
    certificationsIntro: number
    certificationsEnabled: number
    ctaTitle: number
    ctaButtonText: number
    ctaButtonLink: number
    ctaWhatsAppText: number
    isEnabled: number
    updatedAt: number
    philosophy: number
    qualityInfo: number
    whyChooseUs: number
    additionalContent: number
    imageUrl: number
    _all: number
  }


  export type AboutContentAvgAggregateInputType = {
    id?: true
  }

  export type AboutContentSumAggregateInputType = {
    id?: true
  }

  export type AboutContentMinAggregateInputType = {
    id?: true
    heading?: true
    aboutIntro?: true
    ourStory?: true
    storyImageUrl?: true
    mission?: true
    vision?: true
    philosophyIntro?: true
    qualityIntro?: true
    whyChooseUsIntro?: true
    valuesIntro?: true
    galleryTitle?: true
    galleryIntro?: true
    certificationsTitle?: true
    certificationsIntro?: true
    certificationsEnabled?: true
    ctaTitle?: true
    ctaButtonText?: true
    ctaButtonLink?: true
    ctaWhatsAppText?: true
    isEnabled?: true
    updatedAt?: true
    philosophy?: true
    qualityInfo?: true
    whyChooseUs?: true
    additionalContent?: true
    imageUrl?: true
  }

  export type AboutContentMaxAggregateInputType = {
    id?: true
    heading?: true
    aboutIntro?: true
    ourStory?: true
    storyImageUrl?: true
    mission?: true
    vision?: true
    philosophyIntro?: true
    qualityIntro?: true
    whyChooseUsIntro?: true
    valuesIntro?: true
    galleryTitle?: true
    galleryIntro?: true
    certificationsTitle?: true
    certificationsIntro?: true
    certificationsEnabled?: true
    ctaTitle?: true
    ctaButtonText?: true
    ctaButtonLink?: true
    ctaWhatsAppText?: true
    isEnabled?: true
    updatedAt?: true
    philosophy?: true
    qualityInfo?: true
    whyChooseUs?: true
    additionalContent?: true
    imageUrl?: true
  }

  export type AboutContentCountAggregateInputType = {
    id?: true
    heading?: true
    aboutIntro?: true
    ourStory?: true
    storyImageUrl?: true
    mission?: true
    vision?: true
    philosophyIntro?: true
    qualityIntro?: true
    whyChooseUsIntro?: true
    valuesIntro?: true
    galleryTitle?: true
    galleryIntro?: true
    certificationsTitle?: true
    certificationsIntro?: true
    certificationsEnabled?: true
    ctaTitle?: true
    ctaButtonText?: true
    ctaButtonLink?: true
    ctaWhatsAppText?: true
    isEnabled?: true
    updatedAt?: true
    philosophy?: true
    qualityInfo?: true
    whyChooseUs?: true
    additionalContent?: true
    imageUrl?: true
    _all?: true
  }

  export type AboutContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutContent to aggregate.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutContents
    **/
    _count?: true | AboutContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutContentMaxAggregateInputType
  }

  export type GetAboutContentAggregateType<T extends AboutContentAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutContent[P]>
      : GetScalarType<T[P], AggregateAboutContent[P]>
  }




  export type AboutContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutContentWhereInput
    orderBy?: AboutContentOrderByWithAggregationInput | AboutContentOrderByWithAggregationInput[]
    by: AboutContentScalarFieldEnum[] | AboutContentScalarFieldEnum
    having?: AboutContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutContentCountAggregateInputType | true
    _avg?: AboutContentAvgAggregateInputType
    _sum?: AboutContentSumAggregateInputType
    _min?: AboutContentMinAggregateInputType
    _max?: AboutContentMaxAggregateInputType
  }

  export type AboutContentGroupByOutputType = {
    id: number
    heading: string
    aboutIntro: string
    ourStory: string
    storyImageUrl: string | null
    mission: string
    vision: string
    philosophyIntro: string
    qualityIntro: string
    whyChooseUsIntro: string
    valuesIntro: string
    galleryTitle: string
    galleryIntro: string
    certificationsTitle: string
    certificationsIntro: string
    certificationsEnabled: boolean
    ctaTitle: string
    ctaButtonText: string
    ctaButtonLink: string
    ctaWhatsAppText: string
    isEnabled: boolean
    updatedAt: Date
    philosophy: string
    qualityInfo: string
    whyChooseUs: string
    additionalContent: string | null
    imageUrl: string | null
    _count: AboutContentCountAggregateOutputType | null
    _avg: AboutContentAvgAggregateOutputType | null
    _sum: AboutContentSumAggregateOutputType | null
    _min: AboutContentMinAggregateOutputType | null
    _max: AboutContentMaxAggregateOutputType | null
  }

  type GetAboutContentGroupByPayload<T extends AboutContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutContentGroupByOutputType[P]>
            : GetScalarType<T[P], AboutContentGroupByOutputType[P]>
        }
      >
    >


  export type AboutContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heading?: boolean
    aboutIntro?: boolean
    ourStory?: boolean
    storyImageUrl?: boolean
    mission?: boolean
    vision?: boolean
    philosophyIntro?: boolean
    qualityIntro?: boolean
    whyChooseUsIntro?: boolean
    valuesIntro?: boolean
    galleryTitle?: boolean
    galleryIntro?: boolean
    certificationsTitle?: boolean
    certificationsIntro?: boolean
    certificationsEnabled?: boolean
    ctaTitle?: boolean
    ctaButtonText?: boolean
    ctaButtonLink?: boolean
    ctaWhatsAppText?: boolean
    isEnabled?: boolean
    updatedAt?: boolean
    philosophy?: boolean
    qualityInfo?: boolean
    whyChooseUs?: boolean
    additionalContent?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["aboutContent"]>

  export type AboutContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heading?: boolean
    aboutIntro?: boolean
    ourStory?: boolean
    storyImageUrl?: boolean
    mission?: boolean
    vision?: boolean
    philosophyIntro?: boolean
    qualityIntro?: boolean
    whyChooseUsIntro?: boolean
    valuesIntro?: boolean
    galleryTitle?: boolean
    galleryIntro?: boolean
    certificationsTitle?: boolean
    certificationsIntro?: boolean
    certificationsEnabled?: boolean
    ctaTitle?: boolean
    ctaButtonText?: boolean
    ctaButtonLink?: boolean
    ctaWhatsAppText?: boolean
    isEnabled?: boolean
    updatedAt?: boolean
    philosophy?: boolean
    qualityInfo?: boolean
    whyChooseUs?: boolean
    additionalContent?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["aboutContent"]>

  export type AboutContentSelectScalar = {
    id?: boolean
    heading?: boolean
    aboutIntro?: boolean
    ourStory?: boolean
    storyImageUrl?: boolean
    mission?: boolean
    vision?: boolean
    philosophyIntro?: boolean
    qualityIntro?: boolean
    whyChooseUsIntro?: boolean
    valuesIntro?: boolean
    galleryTitle?: boolean
    galleryIntro?: boolean
    certificationsTitle?: boolean
    certificationsIntro?: boolean
    certificationsEnabled?: boolean
    ctaTitle?: boolean
    ctaButtonText?: boolean
    ctaButtonLink?: boolean
    ctaWhatsAppText?: boolean
    isEnabled?: boolean
    updatedAt?: boolean
    philosophy?: boolean
    qualityInfo?: boolean
    whyChooseUs?: boolean
    additionalContent?: boolean
    imageUrl?: boolean
  }


  export type $AboutContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      heading: string
      aboutIntro: string
      ourStory: string
      storyImageUrl: string | null
      mission: string
      vision: string
      philosophyIntro: string
      qualityIntro: string
      whyChooseUsIntro: string
      valuesIntro: string
      galleryTitle: string
      galleryIntro: string
      certificationsTitle: string
      certificationsIntro: string
      certificationsEnabled: boolean
      ctaTitle: string
      ctaButtonText: string
      ctaButtonLink: string
      ctaWhatsAppText: string
      isEnabled: boolean
      updatedAt: Date
      philosophy: string
      qualityInfo: string
      whyChooseUs: string
      additionalContent: string | null
      imageUrl: string | null
    }, ExtArgs["result"]["aboutContent"]>
    composites: {}
  }

  type AboutContentGetPayload<S extends boolean | null | undefined | AboutContentDefaultArgs> = $Result.GetResult<Prisma.$AboutContentPayload, S>

  type AboutContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AboutContentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AboutContentCountAggregateInputType | true
    }

  export interface AboutContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutContent'], meta: { name: 'AboutContent' } }
    /**
     * Find zero or one AboutContent that matches the filter.
     * @param {AboutContentFindUniqueArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutContentFindUniqueArgs>(args: SelectSubset<T, AboutContentFindUniqueArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AboutContent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AboutContentFindUniqueOrThrowArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutContentFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AboutContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentFindFirstArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutContentFindFirstArgs>(args?: SelectSubset<T, AboutContentFindFirstArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AboutContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentFindFirstOrThrowArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutContentFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AboutContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutContents
     * const aboutContents = await prisma.aboutContent.findMany()
     * 
     * // Get first 10 AboutContents
     * const aboutContents = await prisma.aboutContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutContentWithIdOnly = await prisma.aboutContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutContentFindManyArgs>(args?: SelectSubset<T, AboutContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AboutContent.
     * @param {AboutContentCreateArgs} args - Arguments to create a AboutContent.
     * @example
     * // Create one AboutContent
     * const AboutContent = await prisma.aboutContent.create({
     *   data: {
     *     // ... data to create a AboutContent
     *   }
     * })
     * 
     */
    create<T extends AboutContentCreateArgs>(args: SelectSubset<T, AboutContentCreateArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AboutContents.
     * @param {AboutContentCreateManyArgs} args - Arguments to create many AboutContents.
     * @example
     * // Create many AboutContents
     * const aboutContent = await prisma.aboutContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutContentCreateManyArgs>(args?: SelectSubset<T, AboutContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutContents and returns the data saved in the database.
     * @param {AboutContentCreateManyAndReturnArgs} args - Arguments to create many AboutContents.
     * @example
     * // Create many AboutContents
     * const aboutContent = await prisma.aboutContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutContents and only return the `id`
     * const aboutContentWithIdOnly = await prisma.aboutContent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutContentCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AboutContent.
     * @param {AboutContentDeleteArgs} args - Arguments to delete one AboutContent.
     * @example
     * // Delete one AboutContent
     * const AboutContent = await prisma.aboutContent.delete({
     *   where: {
     *     // ... filter to delete one AboutContent
     *   }
     * })
     * 
     */
    delete<T extends AboutContentDeleteArgs>(args: SelectSubset<T, AboutContentDeleteArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AboutContent.
     * @param {AboutContentUpdateArgs} args - Arguments to update one AboutContent.
     * @example
     * // Update one AboutContent
     * const aboutContent = await prisma.aboutContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutContentUpdateArgs>(args: SelectSubset<T, AboutContentUpdateArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AboutContents.
     * @param {AboutContentDeleteManyArgs} args - Arguments to filter AboutContents to delete.
     * @example
     * // Delete a few AboutContents
     * const { count } = await prisma.aboutContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutContentDeleteManyArgs>(args?: SelectSubset<T, AboutContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutContents
     * const aboutContent = await prisma.aboutContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutContentUpdateManyArgs>(args: SelectSubset<T, AboutContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AboutContent.
     * @param {AboutContentUpsertArgs} args - Arguments to update or create a AboutContent.
     * @example
     * // Update or create a AboutContent
     * const aboutContent = await prisma.aboutContent.upsert({
     *   create: {
     *     // ... data to create a AboutContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutContent we want to update
     *   }
     * })
     */
    upsert<T extends AboutContentUpsertArgs>(args: SelectSubset<T, AboutContentUpsertArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AboutContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentCountArgs} args - Arguments to filter AboutContents to count.
     * @example
     * // Count the number of AboutContents
     * const count = await prisma.aboutContent.count({
     *   where: {
     *     // ... the filter for the AboutContents we want to count
     *   }
     * })
    **/
    count<T extends AboutContentCountArgs>(
      args?: Subset<T, AboutContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutContentAggregateArgs>(args: Subset<T, AboutContentAggregateArgs>): Prisma.PrismaPromise<GetAboutContentAggregateType<T>>

    /**
     * Group by AboutContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutContentGroupByArgs['orderBy'] }
        : { orderBy?: AboutContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutContent model
   */
  readonly fields: AboutContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutContent model
   */ 
  interface AboutContentFieldRefs {
    readonly id: FieldRef<"AboutContent", 'Int'>
    readonly heading: FieldRef<"AboutContent", 'String'>
    readonly aboutIntro: FieldRef<"AboutContent", 'String'>
    readonly ourStory: FieldRef<"AboutContent", 'String'>
    readonly storyImageUrl: FieldRef<"AboutContent", 'String'>
    readonly mission: FieldRef<"AboutContent", 'String'>
    readonly vision: FieldRef<"AboutContent", 'String'>
    readonly philosophyIntro: FieldRef<"AboutContent", 'String'>
    readonly qualityIntro: FieldRef<"AboutContent", 'String'>
    readonly whyChooseUsIntro: FieldRef<"AboutContent", 'String'>
    readonly valuesIntro: FieldRef<"AboutContent", 'String'>
    readonly galleryTitle: FieldRef<"AboutContent", 'String'>
    readonly galleryIntro: FieldRef<"AboutContent", 'String'>
    readonly certificationsTitle: FieldRef<"AboutContent", 'String'>
    readonly certificationsIntro: FieldRef<"AboutContent", 'String'>
    readonly certificationsEnabled: FieldRef<"AboutContent", 'Boolean'>
    readonly ctaTitle: FieldRef<"AboutContent", 'String'>
    readonly ctaButtonText: FieldRef<"AboutContent", 'String'>
    readonly ctaButtonLink: FieldRef<"AboutContent", 'String'>
    readonly ctaWhatsAppText: FieldRef<"AboutContent", 'String'>
    readonly isEnabled: FieldRef<"AboutContent", 'Boolean'>
    readonly updatedAt: FieldRef<"AboutContent", 'DateTime'>
    readonly philosophy: FieldRef<"AboutContent", 'String'>
    readonly qualityInfo: FieldRef<"AboutContent", 'String'>
    readonly whyChooseUs: FieldRef<"AboutContent", 'String'>
    readonly additionalContent: FieldRef<"AboutContent", 'String'>
    readonly imageUrl: FieldRef<"AboutContent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AboutContent findUnique
   */
  export type AboutContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent findUniqueOrThrow
   */
  export type AboutContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent findFirst
   */
  export type AboutContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutContents.
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutContents.
     */
    distinct?: AboutContentScalarFieldEnum | AboutContentScalarFieldEnum[]
  }

  /**
   * AboutContent findFirstOrThrow
   */
  export type AboutContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutContents.
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutContents.
     */
    distinct?: AboutContentScalarFieldEnum | AboutContentScalarFieldEnum[]
  }

  /**
   * AboutContent findMany
   */
  export type AboutContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter, which AboutContents to fetch.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutContents.
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    distinct?: AboutContentScalarFieldEnum | AboutContentScalarFieldEnum[]
  }

  /**
   * AboutContent create
   */
  export type AboutContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * The data needed to create a AboutContent.
     */
    data: XOR<AboutContentCreateInput, AboutContentUncheckedCreateInput>
  }

  /**
   * AboutContent createMany
   */
  export type AboutContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutContents.
     */
    data: AboutContentCreateManyInput | AboutContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutContent createManyAndReturn
   */
  export type AboutContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AboutContents.
     */
    data: AboutContentCreateManyInput | AboutContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutContent update
   */
  export type AboutContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * The data needed to update a AboutContent.
     */
    data: XOR<AboutContentUpdateInput, AboutContentUncheckedUpdateInput>
    /**
     * Choose, which AboutContent to update.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent updateMany
   */
  export type AboutContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutContents.
     */
    data: XOR<AboutContentUpdateManyMutationInput, AboutContentUncheckedUpdateManyInput>
    /**
     * Filter which AboutContents to update
     */
    where?: AboutContentWhereInput
  }

  /**
   * AboutContent upsert
   */
  export type AboutContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * The filter to search for the AboutContent to update in case it exists.
     */
    where: AboutContentWhereUniqueInput
    /**
     * In case the AboutContent found by the `where` argument doesn't exist, create a new AboutContent with this data.
     */
    create: XOR<AboutContentCreateInput, AboutContentUncheckedCreateInput>
    /**
     * In case the AboutContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutContentUpdateInput, AboutContentUncheckedUpdateInput>
  }

  /**
   * AboutContent delete
   */
  export type AboutContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter which AboutContent to delete.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent deleteMany
   */
  export type AboutContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutContents to delete
     */
    where?: AboutContentWhereInput
  }

  /**
   * AboutContent without action
   */
  export type AboutContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
  }


  /**
   * Model AboutSection
   */

  export type AggregateAboutSection = {
    _count: AboutSectionCountAggregateOutputType | null
    _avg: AboutSectionAvgAggregateOutputType | null
    _sum: AboutSectionSumAggregateOutputType | null
    _min: AboutSectionMinAggregateOutputType | null
    _max: AboutSectionMaxAggregateOutputType | null
  }

  export type AboutSectionAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type AboutSectionSumAggregateOutputType = {
    displayOrder: number | null
  }

  export type AboutSectionMinAggregateOutputType = {
    id: string | null
    title: string | null
    isEnabled: boolean | null
    displayOrder: number | null
  }

  export type AboutSectionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    isEnabled: boolean | null
    displayOrder: number | null
  }

  export type AboutSectionCountAggregateOutputType = {
    id: number
    title: number
    isEnabled: number
    displayOrder: number
    _all: number
  }


  export type AboutSectionAvgAggregateInputType = {
    displayOrder?: true
  }

  export type AboutSectionSumAggregateInputType = {
    displayOrder?: true
  }

  export type AboutSectionMinAggregateInputType = {
    id?: true
    title?: true
    isEnabled?: true
    displayOrder?: true
  }

  export type AboutSectionMaxAggregateInputType = {
    id?: true
    title?: true
    isEnabled?: true
    displayOrder?: true
  }

  export type AboutSectionCountAggregateInputType = {
    id?: true
    title?: true
    isEnabled?: true
    displayOrder?: true
    _all?: true
  }

  export type AboutSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutSection to aggregate.
     */
    where?: AboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutSections to fetch.
     */
    orderBy?: AboutSectionOrderByWithRelationInput | AboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutSections
    **/
    _count?: true | AboutSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutSectionMaxAggregateInputType
  }

  export type GetAboutSectionAggregateType<T extends AboutSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutSection[P]>
      : GetScalarType<T[P], AggregateAboutSection[P]>
  }




  export type AboutSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutSectionWhereInput
    orderBy?: AboutSectionOrderByWithAggregationInput | AboutSectionOrderByWithAggregationInput[]
    by: AboutSectionScalarFieldEnum[] | AboutSectionScalarFieldEnum
    having?: AboutSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutSectionCountAggregateInputType | true
    _avg?: AboutSectionAvgAggregateInputType
    _sum?: AboutSectionSumAggregateInputType
    _min?: AboutSectionMinAggregateInputType
    _max?: AboutSectionMaxAggregateInputType
  }

  export type AboutSectionGroupByOutputType = {
    id: string
    title: string
    isEnabled: boolean
    displayOrder: number
    _count: AboutSectionCountAggregateOutputType | null
    _avg: AboutSectionAvgAggregateOutputType | null
    _sum: AboutSectionSumAggregateOutputType | null
    _min: AboutSectionMinAggregateOutputType | null
    _max: AboutSectionMaxAggregateOutputType | null
  }

  type GetAboutSectionGroupByPayload<T extends AboutSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutSectionGroupByOutputType[P]>
            : GetScalarType<T[P], AboutSectionGroupByOutputType[P]>
        }
      >
    >


  export type AboutSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isEnabled?: boolean
    displayOrder?: boolean
  }, ExtArgs["result"]["aboutSection"]>

  export type AboutSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isEnabled?: boolean
    displayOrder?: boolean
  }, ExtArgs["result"]["aboutSection"]>

  export type AboutSectionSelectScalar = {
    id?: boolean
    title?: boolean
    isEnabled?: boolean
    displayOrder?: boolean
  }


  export type $AboutSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutSection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      isEnabled: boolean
      displayOrder: number
    }, ExtArgs["result"]["aboutSection"]>
    composites: {}
  }

  type AboutSectionGetPayload<S extends boolean | null | undefined | AboutSectionDefaultArgs> = $Result.GetResult<Prisma.$AboutSectionPayload, S>

  type AboutSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AboutSectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AboutSectionCountAggregateInputType | true
    }

  export interface AboutSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutSection'], meta: { name: 'AboutSection' } }
    /**
     * Find zero or one AboutSection that matches the filter.
     * @param {AboutSectionFindUniqueArgs} args - Arguments to find a AboutSection
     * @example
     * // Get one AboutSection
     * const aboutSection = await prisma.aboutSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutSectionFindUniqueArgs>(args: SelectSubset<T, AboutSectionFindUniqueArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AboutSection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AboutSectionFindUniqueOrThrowArgs} args - Arguments to find a AboutSection
     * @example
     * // Get one AboutSection
     * const aboutSection = await prisma.aboutSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AboutSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionFindFirstArgs} args - Arguments to find a AboutSection
     * @example
     * // Get one AboutSection
     * const aboutSection = await prisma.aboutSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutSectionFindFirstArgs>(args?: SelectSubset<T, AboutSectionFindFirstArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AboutSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionFindFirstOrThrowArgs} args - Arguments to find a AboutSection
     * @example
     * // Get one AboutSection
     * const aboutSection = await prisma.aboutSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AboutSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutSections
     * const aboutSections = await prisma.aboutSection.findMany()
     * 
     * // Get first 10 AboutSections
     * const aboutSections = await prisma.aboutSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutSectionWithIdOnly = await prisma.aboutSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutSectionFindManyArgs>(args?: SelectSubset<T, AboutSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AboutSection.
     * @param {AboutSectionCreateArgs} args - Arguments to create a AboutSection.
     * @example
     * // Create one AboutSection
     * const AboutSection = await prisma.aboutSection.create({
     *   data: {
     *     // ... data to create a AboutSection
     *   }
     * })
     * 
     */
    create<T extends AboutSectionCreateArgs>(args: SelectSubset<T, AboutSectionCreateArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AboutSections.
     * @param {AboutSectionCreateManyArgs} args - Arguments to create many AboutSections.
     * @example
     * // Create many AboutSections
     * const aboutSection = await prisma.aboutSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutSectionCreateManyArgs>(args?: SelectSubset<T, AboutSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutSections and returns the data saved in the database.
     * @param {AboutSectionCreateManyAndReturnArgs} args - Arguments to create many AboutSections.
     * @example
     * // Create many AboutSections
     * const aboutSection = await prisma.aboutSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutSections and only return the `id`
     * const aboutSectionWithIdOnly = await prisma.aboutSection.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AboutSection.
     * @param {AboutSectionDeleteArgs} args - Arguments to delete one AboutSection.
     * @example
     * // Delete one AboutSection
     * const AboutSection = await prisma.aboutSection.delete({
     *   where: {
     *     // ... filter to delete one AboutSection
     *   }
     * })
     * 
     */
    delete<T extends AboutSectionDeleteArgs>(args: SelectSubset<T, AboutSectionDeleteArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AboutSection.
     * @param {AboutSectionUpdateArgs} args - Arguments to update one AboutSection.
     * @example
     * // Update one AboutSection
     * const aboutSection = await prisma.aboutSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutSectionUpdateArgs>(args: SelectSubset<T, AboutSectionUpdateArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AboutSections.
     * @param {AboutSectionDeleteManyArgs} args - Arguments to filter AboutSections to delete.
     * @example
     * // Delete a few AboutSections
     * const { count } = await prisma.aboutSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutSectionDeleteManyArgs>(args?: SelectSubset<T, AboutSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutSections
     * const aboutSection = await prisma.aboutSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutSectionUpdateManyArgs>(args: SelectSubset<T, AboutSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AboutSection.
     * @param {AboutSectionUpsertArgs} args - Arguments to update or create a AboutSection.
     * @example
     * // Update or create a AboutSection
     * const aboutSection = await prisma.aboutSection.upsert({
     *   create: {
     *     // ... data to create a AboutSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutSection we want to update
     *   }
     * })
     */
    upsert<T extends AboutSectionUpsertArgs>(args: SelectSubset<T, AboutSectionUpsertArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AboutSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionCountArgs} args - Arguments to filter AboutSections to count.
     * @example
     * // Count the number of AboutSections
     * const count = await prisma.aboutSection.count({
     *   where: {
     *     // ... the filter for the AboutSections we want to count
     *   }
     * })
    **/
    count<T extends AboutSectionCountArgs>(
      args?: Subset<T, AboutSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutSectionAggregateArgs>(args: Subset<T, AboutSectionAggregateArgs>): Prisma.PrismaPromise<GetAboutSectionAggregateType<T>>

    /**
     * Group by AboutSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutSectionGroupByArgs['orderBy'] }
        : { orderBy?: AboutSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutSection model
   */
  readonly fields: AboutSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutSection model
   */ 
  interface AboutSectionFieldRefs {
    readonly id: FieldRef<"AboutSection", 'String'>
    readonly title: FieldRef<"AboutSection", 'String'>
    readonly isEnabled: FieldRef<"AboutSection", 'Boolean'>
    readonly displayOrder: FieldRef<"AboutSection", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AboutSection findUnique
   */
  export type AboutSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Filter, which AboutSection to fetch.
     */
    where: AboutSectionWhereUniqueInput
  }

  /**
   * AboutSection findUniqueOrThrow
   */
  export type AboutSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Filter, which AboutSection to fetch.
     */
    where: AboutSectionWhereUniqueInput
  }

  /**
   * AboutSection findFirst
   */
  export type AboutSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Filter, which AboutSection to fetch.
     */
    where?: AboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutSections to fetch.
     */
    orderBy?: AboutSectionOrderByWithRelationInput | AboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutSections.
     */
    cursor?: AboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutSections.
     */
    distinct?: AboutSectionScalarFieldEnum | AboutSectionScalarFieldEnum[]
  }

  /**
   * AboutSection findFirstOrThrow
   */
  export type AboutSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Filter, which AboutSection to fetch.
     */
    where?: AboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutSections to fetch.
     */
    orderBy?: AboutSectionOrderByWithRelationInput | AboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutSections.
     */
    cursor?: AboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutSections.
     */
    distinct?: AboutSectionScalarFieldEnum | AboutSectionScalarFieldEnum[]
  }

  /**
   * AboutSection findMany
   */
  export type AboutSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Filter, which AboutSections to fetch.
     */
    where?: AboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutSections to fetch.
     */
    orderBy?: AboutSectionOrderByWithRelationInput | AboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutSections.
     */
    cursor?: AboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutSections.
     */
    skip?: number
    distinct?: AboutSectionScalarFieldEnum | AboutSectionScalarFieldEnum[]
  }

  /**
   * AboutSection create
   */
  export type AboutSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * The data needed to create a AboutSection.
     */
    data: XOR<AboutSectionCreateInput, AboutSectionUncheckedCreateInput>
  }

  /**
   * AboutSection createMany
   */
  export type AboutSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutSections.
     */
    data: AboutSectionCreateManyInput | AboutSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutSection createManyAndReturn
   */
  export type AboutSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AboutSections.
     */
    data: AboutSectionCreateManyInput | AboutSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutSection update
   */
  export type AboutSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * The data needed to update a AboutSection.
     */
    data: XOR<AboutSectionUpdateInput, AboutSectionUncheckedUpdateInput>
    /**
     * Choose, which AboutSection to update.
     */
    where: AboutSectionWhereUniqueInput
  }

  /**
   * AboutSection updateMany
   */
  export type AboutSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutSections.
     */
    data: XOR<AboutSectionUpdateManyMutationInput, AboutSectionUncheckedUpdateManyInput>
    /**
     * Filter which AboutSections to update
     */
    where?: AboutSectionWhereInput
  }

  /**
   * AboutSection upsert
   */
  export type AboutSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * The filter to search for the AboutSection to update in case it exists.
     */
    where: AboutSectionWhereUniqueInput
    /**
     * In case the AboutSection found by the `where` argument doesn't exist, create a new AboutSection with this data.
     */
    create: XOR<AboutSectionCreateInput, AboutSectionUncheckedCreateInput>
    /**
     * In case the AboutSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutSectionUpdateInput, AboutSectionUncheckedUpdateInput>
  }

  /**
   * AboutSection delete
   */
  export type AboutSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Filter which AboutSection to delete.
     */
    where: AboutSectionWhereUniqueInput
  }

  /**
   * AboutSection deleteMany
   */
  export type AboutSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutSections to delete
     */
    where?: AboutSectionWhereInput
  }

  /**
   * AboutSection without action
   */
  export type AboutSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
  }


  /**
   * Model AboutPhilosophyItem
   */

  export type AggregateAboutPhilosophyItem = {
    _count: AboutPhilosophyItemCountAggregateOutputType | null
    _avg: AboutPhilosophyItemAvgAggregateOutputType | null
    _sum: AboutPhilosophyItemSumAggregateOutputType | null
    _min: AboutPhilosophyItemMinAggregateOutputType | null
    _max: AboutPhilosophyItemMaxAggregateOutputType | null
  }

  export type AboutPhilosophyItemAvgAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type AboutPhilosophyItemSumAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type AboutPhilosophyItemMinAggregateOutputType = {
    id: number | null
    icon: string | null
    title: string | null
    description: string | null
    displayOrder: number | null
    isEnabled: boolean | null
  }

  export type AboutPhilosophyItemMaxAggregateOutputType = {
    id: number | null
    icon: string | null
    title: string | null
    description: string | null
    displayOrder: number | null
    isEnabled: boolean | null
  }

  export type AboutPhilosophyItemCountAggregateOutputType = {
    id: number
    icon: number
    title: number
    description: number
    displayOrder: number
    isEnabled: number
    _all: number
  }


  export type AboutPhilosophyItemAvgAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type AboutPhilosophyItemSumAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type AboutPhilosophyItemMinAggregateInputType = {
    id?: true
    icon?: true
    title?: true
    description?: true
    displayOrder?: true
    isEnabled?: true
  }

  export type AboutPhilosophyItemMaxAggregateInputType = {
    id?: true
    icon?: true
    title?: true
    description?: true
    displayOrder?: true
    isEnabled?: true
  }

  export type AboutPhilosophyItemCountAggregateInputType = {
    id?: true
    icon?: true
    title?: true
    description?: true
    displayOrder?: true
    isEnabled?: true
    _all?: true
  }

  export type AboutPhilosophyItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutPhilosophyItem to aggregate.
     */
    where?: AboutPhilosophyItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPhilosophyItems to fetch.
     */
    orderBy?: AboutPhilosophyItemOrderByWithRelationInput | AboutPhilosophyItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutPhilosophyItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPhilosophyItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPhilosophyItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutPhilosophyItems
    **/
    _count?: true | AboutPhilosophyItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutPhilosophyItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutPhilosophyItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutPhilosophyItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutPhilosophyItemMaxAggregateInputType
  }

  export type GetAboutPhilosophyItemAggregateType<T extends AboutPhilosophyItemAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutPhilosophyItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutPhilosophyItem[P]>
      : GetScalarType<T[P], AggregateAboutPhilosophyItem[P]>
  }




  export type AboutPhilosophyItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutPhilosophyItemWhereInput
    orderBy?: AboutPhilosophyItemOrderByWithAggregationInput | AboutPhilosophyItemOrderByWithAggregationInput[]
    by: AboutPhilosophyItemScalarFieldEnum[] | AboutPhilosophyItemScalarFieldEnum
    having?: AboutPhilosophyItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutPhilosophyItemCountAggregateInputType | true
    _avg?: AboutPhilosophyItemAvgAggregateInputType
    _sum?: AboutPhilosophyItemSumAggregateInputType
    _min?: AboutPhilosophyItemMinAggregateInputType
    _max?: AboutPhilosophyItemMaxAggregateInputType
  }

  export type AboutPhilosophyItemGroupByOutputType = {
    id: number
    icon: string
    title: string
    description: string
    displayOrder: number
    isEnabled: boolean
    _count: AboutPhilosophyItemCountAggregateOutputType | null
    _avg: AboutPhilosophyItemAvgAggregateOutputType | null
    _sum: AboutPhilosophyItemSumAggregateOutputType | null
    _min: AboutPhilosophyItemMinAggregateOutputType | null
    _max: AboutPhilosophyItemMaxAggregateOutputType | null
  }

  type GetAboutPhilosophyItemGroupByPayload<T extends AboutPhilosophyItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutPhilosophyItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutPhilosophyItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutPhilosophyItemGroupByOutputType[P]>
            : GetScalarType<T[P], AboutPhilosophyItemGroupByOutputType[P]>
        }
      >
    >


  export type AboutPhilosophyItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }, ExtArgs["result"]["aboutPhilosophyItem"]>

  export type AboutPhilosophyItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }, ExtArgs["result"]["aboutPhilosophyItem"]>

  export type AboutPhilosophyItemSelectScalar = {
    id?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }


  export type $AboutPhilosophyItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutPhilosophyItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      icon: string
      title: string
      description: string
      displayOrder: number
      isEnabled: boolean
    }, ExtArgs["result"]["aboutPhilosophyItem"]>
    composites: {}
  }

  type AboutPhilosophyItemGetPayload<S extends boolean | null | undefined | AboutPhilosophyItemDefaultArgs> = $Result.GetResult<Prisma.$AboutPhilosophyItemPayload, S>

  type AboutPhilosophyItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AboutPhilosophyItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AboutPhilosophyItemCountAggregateInputType | true
    }

  export interface AboutPhilosophyItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutPhilosophyItem'], meta: { name: 'AboutPhilosophyItem' } }
    /**
     * Find zero or one AboutPhilosophyItem that matches the filter.
     * @param {AboutPhilosophyItemFindUniqueArgs} args - Arguments to find a AboutPhilosophyItem
     * @example
     * // Get one AboutPhilosophyItem
     * const aboutPhilosophyItem = await prisma.aboutPhilosophyItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutPhilosophyItemFindUniqueArgs>(args: SelectSubset<T, AboutPhilosophyItemFindUniqueArgs<ExtArgs>>): Prisma__AboutPhilosophyItemClient<$Result.GetResult<Prisma.$AboutPhilosophyItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AboutPhilosophyItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AboutPhilosophyItemFindUniqueOrThrowArgs} args - Arguments to find a AboutPhilosophyItem
     * @example
     * // Get one AboutPhilosophyItem
     * const aboutPhilosophyItem = await prisma.aboutPhilosophyItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutPhilosophyItemFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutPhilosophyItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutPhilosophyItemClient<$Result.GetResult<Prisma.$AboutPhilosophyItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AboutPhilosophyItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPhilosophyItemFindFirstArgs} args - Arguments to find a AboutPhilosophyItem
     * @example
     * // Get one AboutPhilosophyItem
     * const aboutPhilosophyItem = await prisma.aboutPhilosophyItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutPhilosophyItemFindFirstArgs>(args?: SelectSubset<T, AboutPhilosophyItemFindFirstArgs<ExtArgs>>): Prisma__AboutPhilosophyItemClient<$Result.GetResult<Prisma.$AboutPhilosophyItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AboutPhilosophyItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPhilosophyItemFindFirstOrThrowArgs} args - Arguments to find a AboutPhilosophyItem
     * @example
     * // Get one AboutPhilosophyItem
     * const aboutPhilosophyItem = await prisma.aboutPhilosophyItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutPhilosophyItemFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutPhilosophyItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutPhilosophyItemClient<$Result.GetResult<Prisma.$AboutPhilosophyItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AboutPhilosophyItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPhilosophyItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutPhilosophyItems
     * const aboutPhilosophyItems = await prisma.aboutPhilosophyItem.findMany()
     * 
     * // Get first 10 AboutPhilosophyItems
     * const aboutPhilosophyItems = await prisma.aboutPhilosophyItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutPhilosophyItemWithIdOnly = await prisma.aboutPhilosophyItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutPhilosophyItemFindManyArgs>(args?: SelectSubset<T, AboutPhilosophyItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPhilosophyItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AboutPhilosophyItem.
     * @param {AboutPhilosophyItemCreateArgs} args - Arguments to create a AboutPhilosophyItem.
     * @example
     * // Create one AboutPhilosophyItem
     * const AboutPhilosophyItem = await prisma.aboutPhilosophyItem.create({
     *   data: {
     *     // ... data to create a AboutPhilosophyItem
     *   }
     * })
     * 
     */
    create<T extends AboutPhilosophyItemCreateArgs>(args: SelectSubset<T, AboutPhilosophyItemCreateArgs<ExtArgs>>): Prisma__AboutPhilosophyItemClient<$Result.GetResult<Prisma.$AboutPhilosophyItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AboutPhilosophyItems.
     * @param {AboutPhilosophyItemCreateManyArgs} args - Arguments to create many AboutPhilosophyItems.
     * @example
     * // Create many AboutPhilosophyItems
     * const aboutPhilosophyItem = await prisma.aboutPhilosophyItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutPhilosophyItemCreateManyArgs>(args?: SelectSubset<T, AboutPhilosophyItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutPhilosophyItems and returns the data saved in the database.
     * @param {AboutPhilosophyItemCreateManyAndReturnArgs} args - Arguments to create many AboutPhilosophyItems.
     * @example
     * // Create many AboutPhilosophyItems
     * const aboutPhilosophyItem = await prisma.aboutPhilosophyItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutPhilosophyItems and only return the `id`
     * const aboutPhilosophyItemWithIdOnly = await prisma.aboutPhilosophyItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutPhilosophyItemCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutPhilosophyItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPhilosophyItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AboutPhilosophyItem.
     * @param {AboutPhilosophyItemDeleteArgs} args - Arguments to delete one AboutPhilosophyItem.
     * @example
     * // Delete one AboutPhilosophyItem
     * const AboutPhilosophyItem = await prisma.aboutPhilosophyItem.delete({
     *   where: {
     *     // ... filter to delete one AboutPhilosophyItem
     *   }
     * })
     * 
     */
    delete<T extends AboutPhilosophyItemDeleteArgs>(args: SelectSubset<T, AboutPhilosophyItemDeleteArgs<ExtArgs>>): Prisma__AboutPhilosophyItemClient<$Result.GetResult<Prisma.$AboutPhilosophyItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AboutPhilosophyItem.
     * @param {AboutPhilosophyItemUpdateArgs} args - Arguments to update one AboutPhilosophyItem.
     * @example
     * // Update one AboutPhilosophyItem
     * const aboutPhilosophyItem = await prisma.aboutPhilosophyItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutPhilosophyItemUpdateArgs>(args: SelectSubset<T, AboutPhilosophyItemUpdateArgs<ExtArgs>>): Prisma__AboutPhilosophyItemClient<$Result.GetResult<Prisma.$AboutPhilosophyItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AboutPhilosophyItems.
     * @param {AboutPhilosophyItemDeleteManyArgs} args - Arguments to filter AboutPhilosophyItems to delete.
     * @example
     * // Delete a few AboutPhilosophyItems
     * const { count } = await prisma.aboutPhilosophyItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutPhilosophyItemDeleteManyArgs>(args?: SelectSubset<T, AboutPhilosophyItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutPhilosophyItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPhilosophyItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutPhilosophyItems
     * const aboutPhilosophyItem = await prisma.aboutPhilosophyItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutPhilosophyItemUpdateManyArgs>(args: SelectSubset<T, AboutPhilosophyItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AboutPhilosophyItem.
     * @param {AboutPhilosophyItemUpsertArgs} args - Arguments to update or create a AboutPhilosophyItem.
     * @example
     * // Update or create a AboutPhilosophyItem
     * const aboutPhilosophyItem = await prisma.aboutPhilosophyItem.upsert({
     *   create: {
     *     // ... data to create a AboutPhilosophyItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutPhilosophyItem we want to update
     *   }
     * })
     */
    upsert<T extends AboutPhilosophyItemUpsertArgs>(args: SelectSubset<T, AboutPhilosophyItemUpsertArgs<ExtArgs>>): Prisma__AboutPhilosophyItemClient<$Result.GetResult<Prisma.$AboutPhilosophyItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AboutPhilosophyItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPhilosophyItemCountArgs} args - Arguments to filter AboutPhilosophyItems to count.
     * @example
     * // Count the number of AboutPhilosophyItems
     * const count = await prisma.aboutPhilosophyItem.count({
     *   where: {
     *     // ... the filter for the AboutPhilosophyItems we want to count
     *   }
     * })
    **/
    count<T extends AboutPhilosophyItemCountArgs>(
      args?: Subset<T, AboutPhilosophyItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutPhilosophyItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutPhilosophyItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPhilosophyItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutPhilosophyItemAggregateArgs>(args: Subset<T, AboutPhilosophyItemAggregateArgs>): Prisma.PrismaPromise<GetAboutPhilosophyItemAggregateType<T>>

    /**
     * Group by AboutPhilosophyItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPhilosophyItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutPhilosophyItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutPhilosophyItemGroupByArgs['orderBy'] }
        : { orderBy?: AboutPhilosophyItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutPhilosophyItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutPhilosophyItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutPhilosophyItem model
   */
  readonly fields: AboutPhilosophyItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutPhilosophyItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutPhilosophyItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutPhilosophyItem model
   */ 
  interface AboutPhilosophyItemFieldRefs {
    readonly id: FieldRef<"AboutPhilosophyItem", 'Int'>
    readonly icon: FieldRef<"AboutPhilosophyItem", 'String'>
    readonly title: FieldRef<"AboutPhilosophyItem", 'String'>
    readonly description: FieldRef<"AboutPhilosophyItem", 'String'>
    readonly displayOrder: FieldRef<"AboutPhilosophyItem", 'Int'>
    readonly isEnabled: FieldRef<"AboutPhilosophyItem", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AboutPhilosophyItem findUnique
   */
  export type AboutPhilosophyItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPhilosophyItem
     */
    select?: AboutPhilosophyItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutPhilosophyItem to fetch.
     */
    where: AboutPhilosophyItemWhereUniqueInput
  }

  /**
   * AboutPhilosophyItem findUniqueOrThrow
   */
  export type AboutPhilosophyItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPhilosophyItem
     */
    select?: AboutPhilosophyItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutPhilosophyItem to fetch.
     */
    where: AboutPhilosophyItemWhereUniqueInput
  }

  /**
   * AboutPhilosophyItem findFirst
   */
  export type AboutPhilosophyItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPhilosophyItem
     */
    select?: AboutPhilosophyItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutPhilosophyItem to fetch.
     */
    where?: AboutPhilosophyItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPhilosophyItems to fetch.
     */
    orderBy?: AboutPhilosophyItemOrderByWithRelationInput | AboutPhilosophyItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutPhilosophyItems.
     */
    cursor?: AboutPhilosophyItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPhilosophyItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPhilosophyItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutPhilosophyItems.
     */
    distinct?: AboutPhilosophyItemScalarFieldEnum | AboutPhilosophyItemScalarFieldEnum[]
  }

  /**
   * AboutPhilosophyItem findFirstOrThrow
   */
  export type AboutPhilosophyItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPhilosophyItem
     */
    select?: AboutPhilosophyItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutPhilosophyItem to fetch.
     */
    where?: AboutPhilosophyItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPhilosophyItems to fetch.
     */
    orderBy?: AboutPhilosophyItemOrderByWithRelationInput | AboutPhilosophyItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutPhilosophyItems.
     */
    cursor?: AboutPhilosophyItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPhilosophyItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPhilosophyItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutPhilosophyItems.
     */
    distinct?: AboutPhilosophyItemScalarFieldEnum | AboutPhilosophyItemScalarFieldEnum[]
  }

  /**
   * AboutPhilosophyItem findMany
   */
  export type AboutPhilosophyItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPhilosophyItem
     */
    select?: AboutPhilosophyItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutPhilosophyItems to fetch.
     */
    where?: AboutPhilosophyItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPhilosophyItems to fetch.
     */
    orderBy?: AboutPhilosophyItemOrderByWithRelationInput | AboutPhilosophyItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutPhilosophyItems.
     */
    cursor?: AboutPhilosophyItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPhilosophyItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPhilosophyItems.
     */
    skip?: number
    distinct?: AboutPhilosophyItemScalarFieldEnum | AboutPhilosophyItemScalarFieldEnum[]
  }

  /**
   * AboutPhilosophyItem create
   */
  export type AboutPhilosophyItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPhilosophyItem
     */
    select?: AboutPhilosophyItemSelect<ExtArgs> | null
    /**
     * The data needed to create a AboutPhilosophyItem.
     */
    data: XOR<AboutPhilosophyItemCreateInput, AboutPhilosophyItemUncheckedCreateInput>
  }

  /**
   * AboutPhilosophyItem createMany
   */
  export type AboutPhilosophyItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutPhilosophyItems.
     */
    data: AboutPhilosophyItemCreateManyInput | AboutPhilosophyItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutPhilosophyItem createManyAndReturn
   */
  export type AboutPhilosophyItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPhilosophyItem
     */
    select?: AboutPhilosophyItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AboutPhilosophyItems.
     */
    data: AboutPhilosophyItemCreateManyInput | AboutPhilosophyItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutPhilosophyItem update
   */
  export type AboutPhilosophyItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPhilosophyItem
     */
    select?: AboutPhilosophyItemSelect<ExtArgs> | null
    /**
     * The data needed to update a AboutPhilosophyItem.
     */
    data: XOR<AboutPhilosophyItemUpdateInput, AboutPhilosophyItemUncheckedUpdateInput>
    /**
     * Choose, which AboutPhilosophyItem to update.
     */
    where: AboutPhilosophyItemWhereUniqueInput
  }

  /**
   * AboutPhilosophyItem updateMany
   */
  export type AboutPhilosophyItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutPhilosophyItems.
     */
    data: XOR<AboutPhilosophyItemUpdateManyMutationInput, AboutPhilosophyItemUncheckedUpdateManyInput>
    /**
     * Filter which AboutPhilosophyItems to update
     */
    where?: AboutPhilosophyItemWhereInput
  }

  /**
   * AboutPhilosophyItem upsert
   */
  export type AboutPhilosophyItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPhilosophyItem
     */
    select?: AboutPhilosophyItemSelect<ExtArgs> | null
    /**
     * The filter to search for the AboutPhilosophyItem to update in case it exists.
     */
    where: AboutPhilosophyItemWhereUniqueInput
    /**
     * In case the AboutPhilosophyItem found by the `where` argument doesn't exist, create a new AboutPhilosophyItem with this data.
     */
    create: XOR<AboutPhilosophyItemCreateInput, AboutPhilosophyItemUncheckedCreateInput>
    /**
     * In case the AboutPhilosophyItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutPhilosophyItemUpdateInput, AboutPhilosophyItemUncheckedUpdateInput>
  }

  /**
   * AboutPhilosophyItem delete
   */
  export type AboutPhilosophyItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPhilosophyItem
     */
    select?: AboutPhilosophyItemSelect<ExtArgs> | null
    /**
     * Filter which AboutPhilosophyItem to delete.
     */
    where: AboutPhilosophyItemWhereUniqueInput
  }

  /**
   * AboutPhilosophyItem deleteMany
   */
  export type AboutPhilosophyItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutPhilosophyItems to delete
     */
    where?: AboutPhilosophyItemWhereInput
  }

  /**
   * AboutPhilosophyItem without action
   */
  export type AboutPhilosophyItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPhilosophyItem
     */
    select?: AboutPhilosophyItemSelect<ExtArgs> | null
  }


  /**
   * Model AboutQualityItem
   */

  export type AggregateAboutQualityItem = {
    _count: AboutQualityItemCountAggregateOutputType | null
    _avg: AboutQualityItemAvgAggregateOutputType | null
    _sum: AboutQualityItemSumAggregateOutputType | null
    _min: AboutQualityItemMinAggregateOutputType | null
    _max: AboutQualityItemMaxAggregateOutputType | null
  }

  export type AboutQualityItemAvgAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type AboutQualityItemSumAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type AboutQualityItemMinAggregateOutputType = {
    id: number | null
    icon: string | null
    title: string | null
    description: string | null
    displayOrder: number | null
    isEnabled: boolean | null
  }

  export type AboutQualityItemMaxAggregateOutputType = {
    id: number | null
    icon: string | null
    title: string | null
    description: string | null
    displayOrder: number | null
    isEnabled: boolean | null
  }

  export type AboutQualityItemCountAggregateOutputType = {
    id: number
    icon: number
    title: number
    description: number
    displayOrder: number
    isEnabled: number
    _all: number
  }


  export type AboutQualityItemAvgAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type AboutQualityItemSumAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type AboutQualityItemMinAggregateInputType = {
    id?: true
    icon?: true
    title?: true
    description?: true
    displayOrder?: true
    isEnabled?: true
  }

  export type AboutQualityItemMaxAggregateInputType = {
    id?: true
    icon?: true
    title?: true
    description?: true
    displayOrder?: true
    isEnabled?: true
  }

  export type AboutQualityItemCountAggregateInputType = {
    id?: true
    icon?: true
    title?: true
    description?: true
    displayOrder?: true
    isEnabled?: true
    _all?: true
  }

  export type AboutQualityItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutQualityItem to aggregate.
     */
    where?: AboutQualityItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutQualityItems to fetch.
     */
    orderBy?: AboutQualityItemOrderByWithRelationInput | AboutQualityItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutQualityItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutQualityItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutQualityItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutQualityItems
    **/
    _count?: true | AboutQualityItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutQualityItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutQualityItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutQualityItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutQualityItemMaxAggregateInputType
  }

  export type GetAboutQualityItemAggregateType<T extends AboutQualityItemAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutQualityItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutQualityItem[P]>
      : GetScalarType<T[P], AggregateAboutQualityItem[P]>
  }




  export type AboutQualityItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutQualityItemWhereInput
    orderBy?: AboutQualityItemOrderByWithAggregationInput | AboutQualityItemOrderByWithAggregationInput[]
    by: AboutQualityItemScalarFieldEnum[] | AboutQualityItemScalarFieldEnum
    having?: AboutQualityItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutQualityItemCountAggregateInputType | true
    _avg?: AboutQualityItemAvgAggregateInputType
    _sum?: AboutQualityItemSumAggregateInputType
    _min?: AboutQualityItemMinAggregateInputType
    _max?: AboutQualityItemMaxAggregateInputType
  }

  export type AboutQualityItemGroupByOutputType = {
    id: number
    icon: string
    title: string
    description: string
    displayOrder: number
    isEnabled: boolean
    _count: AboutQualityItemCountAggregateOutputType | null
    _avg: AboutQualityItemAvgAggregateOutputType | null
    _sum: AboutQualityItemSumAggregateOutputType | null
    _min: AboutQualityItemMinAggregateOutputType | null
    _max: AboutQualityItemMaxAggregateOutputType | null
  }

  type GetAboutQualityItemGroupByPayload<T extends AboutQualityItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutQualityItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutQualityItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutQualityItemGroupByOutputType[P]>
            : GetScalarType<T[P], AboutQualityItemGroupByOutputType[P]>
        }
      >
    >


  export type AboutQualityItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }, ExtArgs["result"]["aboutQualityItem"]>

  export type AboutQualityItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }, ExtArgs["result"]["aboutQualityItem"]>

  export type AboutQualityItemSelectScalar = {
    id?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }


  export type $AboutQualityItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutQualityItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      icon: string
      title: string
      description: string
      displayOrder: number
      isEnabled: boolean
    }, ExtArgs["result"]["aboutQualityItem"]>
    composites: {}
  }

  type AboutQualityItemGetPayload<S extends boolean | null | undefined | AboutQualityItemDefaultArgs> = $Result.GetResult<Prisma.$AboutQualityItemPayload, S>

  type AboutQualityItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AboutQualityItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AboutQualityItemCountAggregateInputType | true
    }

  export interface AboutQualityItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutQualityItem'], meta: { name: 'AboutQualityItem' } }
    /**
     * Find zero or one AboutQualityItem that matches the filter.
     * @param {AboutQualityItemFindUniqueArgs} args - Arguments to find a AboutQualityItem
     * @example
     * // Get one AboutQualityItem
     * const aboutQualityItem = await prisma.aboutQualityItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutQualityItemFindUniqueArgs>(args: SelectSubset<T, AboutQualityItemFindUniqueArgs<ExtArgs>>): Prisma__AboutQualityItemClient<$Result.GetResult<Prisma.$AboutQualityItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AboutQualityItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AboutQualityItemFindUniqueOrThrowArgs} args - Arguments to find a AboutQualityItem
     * @example
     * // Get one AboutQualityItem
     * const aboutQualityItem = await prisma.aboutQualityItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutQualityItemFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutQualityItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutQualityItemClient<$Result.GetResult<Prisma.$AboutQualityItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AboutQualityItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutQualityItemFindFirstArgs} args - Arguments to find a AboutQualityItem
     * @example
     * // Get one AboutQualityItem
     * const aboutQualityItem = await prisma.aboutQualityItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutQualityItemFindFirstArgs>(args?: SelectSubset<T, AboutQualityItemFindFirstArgs<ExtArgs>>): Prisma__AboutQualityItemClient<$Result.GetResult<Prisma.$AboutQualityItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AboutQualityItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutQualityItemFindFirstOrThrowArgs} args - Arguments to find a AboutQualityItem
     * @example
     * // Get one AboutQualityItem
     * const aboutQualityItem = await prisma.aboutQualityItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutQualityItemFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutQualityItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutQualityItemClient<$Result.GetResult<Prisma.$AboutQualityItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AboutQualityItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutQualityItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutQualityItems
     * const aboutQualityItems = await prisma.aboutQualityItem.findMany()
     * 
     * // Get first 10 AboutQualityItems
     * const aboutQualityItems = await prisma.aboutQualityItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutQualityItemWithIdOnly = await prisma.aboutQualityItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutQualityItemFindManyArgs>(args?: SelectSubset<T, AboutQualityItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutQualityItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AboutQualityItem.
     * @param {AboutQualityItemCreateArgs} args - Arguments to create a AboutQualityItem.
     * @example
     * // Create one AboutQualityItem
     * const AboutQualityItem = await prisma.aboutQualityItem.create({
     *   data: {
     *     // ... data to create a AboutQualityItem
     *   }
     * })
     * 
     */
    create<T extends AboutQualityItemCreateArgs>(args: SelectSubset<T, AboutQualityItemCreateArgs<ExtArgs>>): Prisma__AboutQualityItemClient<$Result.GetResult<Prisma.$AboutQualityItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AboutQualityItems.
     * @param {AboutQualityItemCreateManyArgs} args - Arguments to create many AboutQualityItems.
     * @example
     * // Create many AboutQualityItems
     * const aboutQualityItem = await prisma.aboutQualityItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutQualityItemCreateManyArgs>(args?: SelectSubset<T, AboutQualityItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutQualityItems and returns the data saved in the database.
     * @param {AboutQualityItemCreateManyAndReturnArgs} args - Arguments to create many AboutQualityItems.
     * @example
     * // Create many AboutQualityItems
     * const aboutQualityItem = await prisma.aboutQualityItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutQualityItems and only return the `id`
     * const aboutQualityItemWithIdOnly = await prisma.aboutQualityItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutQualityItemCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutQualityItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutQualityItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AboutQualityItem.
     * @param {AboutQualityItemDeleteArgs} args - Arguments to delete one AboutQualityItem.
     * @example
     * // Delete one AboutQualityItem
     * const AboutQualityItem = await prisma.aboutQualityItem.delete({
     *   where: {
     *     // ... filter to delete one AboutQualityItem
     *   }
     * })
     * 
     */
    delete<T extends AboutQualityItemDeleteArgs>(args: SelectSubset<T, AboutQualityItemDeleteArgs<ExtArgs>>): Prisma__AboutQualityItemClient<$Result.GetResult<Prisma.$AboutQualityItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AboutQualityItem.
     * @param {AboutQualityItemUpdateArgs} args - Arguments to update one AboutQualityItem.
     * @example
     * // Update one AboutQualityItem
     * const aboutQualityItem = await prisma.aboutQualityItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutQualityItemUpdateArgs>(args: SelectSubset<T, AboutQualityItemUpdateArgs<ExtArgs>>): Prisma__AboutQualityItemClient<$Result.GetResult<Prisma.$AboutQualityItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AboutQualityItems.
     * @param {AboutQualityItemDeleteManyArgs} args - Arguments to filter AboutQualityItems to delete.
     * @example
     * // Delete a few AboutQualityItems
     * const { count } = await prisma.aboutQualityItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutQualityItemDeleteManyArgs>(args?: SelectSubset<T, AboutQualityItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutQualityItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutQualityItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutQualityItems
     * const aboutQualityItem = await prisma.aboutQualityItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutQualityItemUpdateManyArgs>(args: SelectSubset<T, AboutQualityItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AboutQualityItem.
     * @param {AboutQualityItemUpsertArgs} args - Arguments to update or create a AboutQualityItem.
     * @example
     * // Update or create a AboutQualityItem
     * const aboutQualityItem = await prisma.aboutQualityItem.upsert({
     *   create: {
     *     // ... data to create a AboutQualityItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutQualityItem we want to update
     *   }
     * })
     */
    upsert<T extends AboutQualityItemUpsertArgs>(args: SelectSubset<T, AboutQualityItemUpsertArgs<ExtArgs>>): Prisma__AboutQualityItemClient<$Result.GetResult<Prisma.$AboutQualityItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AboutQualityItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutQualityItemCountArgs} args - Arguments to filter AboutQualityItems to count.
     * @example
     * // Count the number of AboutQualityItems
     * const count = await prisma.aboutQualityItem.count({
     *   where: {
     *     // ... the filter for the AboutQualityItems we want to count
     *   }
     * })
    **/
    count<T extends AboutQualityItemCountArgs>(
      args?: Subset<T, AboutQualityItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutQualityItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutQualityItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutQualityItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutQualityItemAggregateArgs>(args: Subset<T, AboutQualityItemAggregateArgs>): Prisma.PrismaPromise<GetAboutQualityItemAggregateType<T>>

    /**
     * Group by AboutQualityItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutQualityItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutQualityItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutQualityItemGroupByArgs['orderBy'] }
        : { orderBy?: AboutQualityItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutQualityItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutQualityItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutQualityItem model
   */
  readonly fields: AboutQualityItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutQualityItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutQualityItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutQualityItem model
   */ 
  interface AboutQualityItemFieldRefs {
    readonly id: FieldRef<"AboutQualityItem", 'Int'>
    readonly icon: FieldRef<"AboutQualityItem", 'String'>
    readonly title: FieldRef<"AboutQualityItem", 'String'>
    readonly description: FieldRef<"AboutQualityItem", 'String'>
    readonly displayOrder: FieldRef<"AboutQualityItem", 'Int'>
    readonly isEnabled: FieldRef<"AboutQualityItem", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AboutQualityItem findUnique
   */
  export type AboutQualityItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutQualityItem
     */
    select?: AboutQualityItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutQualityItem to fetch.
     */
    where: AboutQualityItemWhereUniqueInput
  }

  /**
   * AboutQualityItem findUniqueOrThrow
   */
  export type AboutQualityItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutQualityItem
     */
    select?: AboutQualityItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutQualityItem to fetch.
     */
    where: AboutQualityItemWhereUniqueInput
  }

  /**
   * AboutQualityItem findFirst
   */
  export type AboutQualityItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutQualityItem
     */
    select?: AboutQualityItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutQualityItem to fetch.
     */
    where?: AboutQualityItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutQualityItems to fetch.
     */
    orderBy?: AboutQualityItemOrderByWithRelationInput | AboutQualityItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutQualityItems.
     */
    cursor?: AboutQualityItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutQualityItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutQualityItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutQualityItems.
     */
    distinct?: AboutQualityItemScalarFieldEnum | AboutQualityItemScalarFieldEnum[]
  }

  /**
   * AboutQualityItem findFirstOrThrow
   */
  export type AboutQualityItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutQualityItem
     */
    select?: AboutQualityItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutQualityItem to fetch.
     */
    where?: AboutQualityItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutQualityItems to fetch.
     */
    orderBy?: AboutQualityItemOrderByWithRelationInput | AboutQualityItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutQualityItems.
     */
    cursor?: AboutQualityItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutQualityItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutQualityItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutQualityItems.
     */
    distinct?: AboutQualityItemScalarFieldEnum | AboutQualityItemScalarFieldEnum[]
  }

  /**
   * AboutQualityItem findMany
   */
  export type AboutQualityItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutQualityItem
     */
    select?: AboutQualityItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutQualityItems to fetch.
     */
    where?: AboutQualityItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutQualityItems to fetch.
     */
    orderBy?: AboutQualityItemOrderByWithRelationInput | AboutQualityItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutQualityItems.
     */
    cursor?: AboutQualityItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutQualityItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutQualityItems.
     */
    skip?: number
    distinct?: AboutQualityItemScalarFieldEnum | AboutQualityItemScalarFieldEnum[]
  }

  /**
   * AboutQualityItem create
   */
  export type AboutQualityItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutQualityItem
     */
    select?: AboutQualityItemSelect<ExtArgs> | null
    /**
     * The data needed to create a AboutQualityItem.
     */
    data: XOR<AboutQualityItemCreateInput, AboutQualityItemUncheckedCreateInput>
  }

  /**
   * AboutQualityItem createMany
   */
  export type AboutQualityItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutQualityItems.
     */
    data: AboutQualityItemCreateManyInput | AboutQualityItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutQualityItem createManyAndReturn
   */
  export type AboutQualityItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutQualityItem
     */
    select?: AboutQualityItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AboutQualityItems.
     */
    data: AboutQualityItemCreateManyInput | AboutQualityItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutQualityItem update
   */
  export type AboutQualityItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutQualityItem
     */
    select?: AboutQualityItemSelect<ExtArgs> | null
    /**
     * The data needed to update a AboutQualityItem.
     */
    data: XOR<AboutQualityItemUpdateInput, AboutQualityItemUncheckedUpdateInput>
    /**
     * Choose, which AboutQualityItem to update.
     */
    where: AboutQualityItemWhereUniqueInput
  }

  /**
   * AboutQualityItem updateMany
   */
  export type AboutQualityItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutQualityItems.
     */
    data: XOR<AboutQualityItemUpdateManyMutationInput, AboutQualityItemUncheckedUpdateManyInput>
    /**
     * Filter which AboutQualityItems to update
     */
    where?: AboutQualityItemWhereInput
  }

  /**
   * AboutQualityItem upsert
   */
  export type AboutQualityItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutQualityItem
     */
    select?: AboutQualityItemSelect<ExtArgs> | null
    /**
     * The filter to search for the AboutQualityItem to update in case it exists.
     */
    where: AboutQualityItemWhereUniqueInput
    /**
     * In case the AboutQualityItem found by the `where` argument doesn't exist, create a new AboutQualityItem with this data.
     */
    create: XOR<AboutQualityItemCreateInput, AboutQualityItemUncheckedCreateInput>
    /**
     * In case the AboutQualityItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutQualityItemUpdateInput, AboutQualityItemUncheckedUpdateInput>
  }

  /**
   * AboutQualityItem delete
   */
  export type AboutQualityItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutQualityItem
     */
    select?: AboutQualityItemSelect<ExtArgs> | null
    /**
     * Filter which AboutQualityItem to delete.
     */
    where: AboutQualityItemWhereUniqueInput
  }

  /**
   * AboutQualityItem deleteMany
   */
  export type AboutQualityItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutQualityItems to delete
     */
    where?: AboutQualityItemWhereInput
  }

  /**
   * AboutQualityItem without action
   */
  export type AboutQualityItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutQualityItem
     */
    select?: AboutQualityItemSelect<ExtArgs> | null
  }


  /**
   * Model AboutWhyChooseUsItem
   */

  export type AggregateAboutWhyChooseUsItem = {
    _count: AboutWhyChooseUsItemCountAggregateOutputType | null
    _avg: AboutWhyChooseUsItemAvgAggregateOutputType | null
    _sum: AboutWhyChooseUsItemSumAggregateOutputType | null
    _min: AboutWhyChooseUsItemMinAggregateOutputType | null
    _max: AboutWhyChooseUsItemMaxAggregateOutputType | null
  }

  export type AboutWhyChooseUsItemAvgAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type AboutWhyChooseUsItemSumAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type AboutWhyChooseUsItemMinAggregateOutputType = {
    id: number | null
    icon: string | null
    title: string | null
    description: string | null
    displayOrder: number | null
    isEnabled: boolean | null
  }

  export type AboutWhyChooseUsItemMaxAggregateOutputType = {
    id: number | null
    icon: string | null
    title: string | null
    description: string | null
    displayOrder: number | null
    isEnabled: boolean | null
  }

  export type AboutWhyChooseUsItemCountAggregateOutputType = {
    id: number
    icon: number
    title: number
    description: number
    displayOrder: number
    isEnabled: number
    _all: number
  }


  export type AboutWhyChooseUsItemAvgAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type AboutWhyChooseUsItemSumAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type AboutWhyChooseUsItemMinAggregateInputType = {
    id?: true
    icon?: true
    title?: true
    description?: true
    displayOrder?: true
    isEnabled?: true
  }

  export type AboutWhyChooseUsItemMaxAggregateInputType = {
    id?: true
    icon?: true
    title?: true
    description?: true
    displayOrder?: true
    isEnabled?: true
  }

  export type AboutWhyChooseUsItemCountAggregateInputType = {
    id?: true
    icon?: true
    title?: true
    description?: true
    displayOrder?: true
    isEnabled?: true
    _all?: true
  }

  export type AboutWhyChooseUsItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutWhyChooseUsItem to aggregate.
     */
    where?: AboutWhyChooseUsItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutWhyChooseUsItems to fetch.
     */
    orderBy?: AboutWhyChooseUsItemOrderByWithRelationInput | AboutWhyChooseUsItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutWhyChooseUsItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutWhyChooseUsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutWhyChooseUsItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutWhyChooseUsItems
    **/
    _count?: true | AboutWhyChooseUsItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutWhyChooseUsItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutWhyChooseUsItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutWhyChooseUsItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutWhyChooseUsItemMaxAggregateInputType
  }

  export type GetAboutWhyChooseUsItemAggregateType<T extends AboutWhyChooseUsItemAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutWhyChooseUsItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutWhyChooseUsItem[P]>
      : GetScalarType<T[P], AggregateAboutWhyChooseUsItem[P]>
  }




  export type AboutWhyChooseUsItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutWhyChooseUsItemWhereInput
    orderBy?: AboutWhyChooseUsItemOrderByWithAggregationInput | AboutWhyChooseUsItemOrderByWithAggregationInput[]
    by: AboutWhyChooseUsItemScalarFieldEnum[] | AboutWhyChooseUsItemScalarFieldEnum
    having?: AboutWhyChooseUsItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutWhyChooseUsItemCountAggregateInputType | true
    _avg?: AboutWhyChooseUsItemAvgAggregateInputType
    _sum?: AboutWhyChooseUsItemSumAggregateInputType
    _min?: AboutWhyChooseUsItemMinAggregateInputType
    _max?: AboutWhyChooseUsItemMaxAggregateInputType
  }

  export type AboutWhyChooseUsItemGroupByOutputType = {
    id: number
    icon: string | null
    title: string
    description: string
    displayOrder: number
    isEnabled: boolean
    _count: AboutWhyChooseUsItemCountAggregateOutputType | null
    _avg: AboutWhyChooseUsItemAvgAggregateOutputType | null
    _sum: AboutWhyChooseUsItemSumAggregateOutputType | null
    _min: AboutWhyChooseUsItemMinAggregateOutputType | null
    _max: AboutWhyChooseUsItemMaxAggregateOutputType | null
  }

  type GetAboutWhyChooseUsItemGroupByPayload<T extends AboutWhyChooseUsItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutWhyChooseUsItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutWhyChooseUsItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutWhyChooseUsItemGroupByOutputType[P]>
            : GetScalarType<T[P], AboutWhyChooseUsItemGroupByOutputType[P]>
        }
      >
    >


  export type AboutWhyChooseUsItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }, ExtArgs["result"]["aboutWhyChooseUsItem"]>

  export type AboutWhyChooseUsItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }, ExtArgs["result"]["aboutWhyChooseUsItem"]>

  export type AboutWhyChooseUsItemSelectScalar = {
    id?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }


  export type $AboutWhyChooseUsItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutWhyChooseUsItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      icon: string | null
      title: string
      description: string
      displayOrder: number
      isEnabled: boolean
    }, ExtArgs["result"]["aboutWhyChooseUsItem"]>
    composites: {}
  }

  type AboutWhyChooseUsItemGetPayload<S extends boolean | null | undefined | AboutWhyChooseUsItemDefaultArgs> = $Result.GetResult<Prisma.$AboutWhyChooseUsItemPayload, S>

  type AboutWhyChooseUsItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AboutWhyChooseUsItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AboutWhyChooseUsItemCountAggregateInputType | true
    }

  export interface AboutWhyChooseUsItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutWhyChooseUsItem'], meta: { name: 'AboutWhyChooseUsItem' } }
    /**
     * Find zero or one AboutWhyChooseUsItem that matches the filter.
     * @param {AboutWhyChooseUsItemFindUniqueArgs} args - Arguments to find a AboutWhyChooseUsItem
     * @example
     * // Get one AboutWhyChooseUsItem
     * const aboutWhyChooseUsItem = await prisma.aboutWhyChooseUsItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutWhyChooseUsItemFindUniqueArgs>(args: SelectSubset<T, AboutWhyChooseUsItemFindUniqueArgs<ExtArgs>>): Prisma__AboutWhyChooseUsItemClient<$Result.GetResult<Prisma.$AboutWhyChooseUsItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AboutWhyChooseUsItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AboutWhyChooseUsItemFindUniqueOrThrowArgs} args - Arguments to find a AboutWhyChooseUsItem
     * @example
     * // Get one AboutWhyChooseUsItem
     * const aboutWhyChooseUsItem = await prisma.aboutWhyChooseUsItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutWhyChooseUsItemFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutWhyChooseUsItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutWhyChooseUsItemClient<$Result.GetResult<Prisma.$AboutWhyChooseUsItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AboutWhyChooseUsItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutWhyChooseUsItemFindFirstArgs} args - Arguments to find a AboutWhyChooseUsItem
     * @example
     * // Get one AboutWhyChooseUsItem
     * const aboutWhyChooseUsItem = await prisma.aboutWhyChooseUsItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutWhyChooseUsItemFindFirstArgs>(args?: SelectSubset<T, AboutWhyChooseUsItemFindFirstArgs<ExtArgs>>): Prisma__AboutWhyChooseUsItemClient<$Result.GetResult<Prisma.$AboutWhyChooseUsItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AboutWhyChooseUsItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutWhyChooseUsItemFindFirstOrThrowArgs} args - Arguments to find a AboutWhyChooseUsItem
     * @example
     * // Get one AboutWhyChooseUsItem
     * const aboutWhyChooseUsItem = await prisma.aboutWhyChooseUsItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutWhyChooseUsItemFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutWhyChooseUsItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutWhyChooseUsItemClient<$Result.GetResult<Prisma.$AboutWhyChooseUsItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AboutWhyChooseUsItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutWhyChooseUsItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutWhyChooseUsItems
     * const aboutWhyChooseUsItems = await prisma.aboutWhyChooseUsItem.findMany()
     * 
     * // Get first 10 AboutWhyChooseUsItems
     * const aboutWhyChooseUsItems = await prisma.aboutWhyChooseUsItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutWhyChooseUsItemWithIdOnly = await prisma.aboutWhyChooseUsItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutWhyChooseUsItemFindManyArgs>(args?: SelectSubset<T, AboutWhyChooseUsItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutWhyChooseUsItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AboutWhyChooseUsItem.
     * @param {AboutWhyChooseUsItemCreateArgs} args - Arguments to create a AboutWhyChooseUsItem.
     * @example
     * // Create one AboutWhyChooseUsItem
     * const AboutWhyChooseUsItem = await prisma.aboutWhyChooseUsItem.create({
     *   data: {
     *     // ... data to create a AboutWhyChooseUsItem
     *   }
     * })
     * 
     */
    create<T extends AboutWhyChooseUsItemCreateArgs>(args: SelectSubset<T, AboutWhyChooseUsItemCreateArgs<ExtArgs>>): Prisma__AboutWhyChooseUsItemClient<$Result.GetResult<Prisma.$AboutWhyChooseUsItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AboutWhyChooseUsItems.
     * @param {AboutWhyChooseUsItemCreateManyArgs} args - Arguments to create many AboutWhyChooseUsItems.
     * @example
     * // Create many AboutWhyChooseUsItems
     * const aboutWhyChooseUsItem = await prisma.aboutWhyChooseUsItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutWhyChooseUsItemCreateManyArgs>(args?: SelectSubset<T, AboutWhyChooseUsItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutWhyChooseUsItems and returns the data saved in the database.
     * @param {AboutWhyChooseUsItemCreateManyAndReturnArgs} args - Arguments to create many AboutWhyChooseUsItems.
     * @example
     * // Create many AboutWhyChooseUsItems
     * const aboutWhyChooseUsItem = await prisma.aboutWhyChooseUsItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutWhyChooseUsItems and only return the `id`
     * const aboutWhyChooseUsItemWithIdOnly = await prisma.aboutWhyChooseUsItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutWhyChooseUsItemCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutWhyChooseUsItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutWhyChooseUsItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AboutWhyChooseUsItem.
     * @param {AboutWhyChooseUsItemDeleteArgs} args - Arguments to delete one AboutWhyChooseUsItem.
     * @example
     * // Delete one AboutWhyChooseUsItem
     * const AboutWhyChooseUsItem = await prisma.aboutWhyChooseUsItem.delete({
     *   where: {
     *     // ... filter to delete one AboutWhyChooseUsItem
     *   }
     * })
     * 
     */
    delete<T extends AboutWhyChooseUsItemDeleteArgs>(args: SelectSubset<T, AboutWhyChooseUsItemDeleteArgs<ExtArgs>>): Prisma__AboutWhyChooseUsItemClient<$Result.GetResult<Prisma.$AboutWhyChooseUsItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AboutWhyChooseUsItem.
     * @param {AboutWhyChooseUsItemUpdateArgs} args - Arguments to update one AboutWhyChooseUsItem.
     * @example
     * // Update one AboutWhyChooseUsItem
     * const aboutWhyChooseUsItem = await prisma.aboutWhyChooseUsItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutWhyChooseUsItemUpdateArgs>(args: SelectSubset<T, AboutWhyChooseUsItemUpdateArgs<ExtArgs>>): Prisma__AboutWhyChooseUsItemClient<$Result.GetResult<Prisma.$AboutWhyChooseUsItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AboutWhyChooseUsItems.
     * @param {AboutWhyChooseUsItemDeleteManyArgs} args - Arguments to filter AboutWhyChooseUsItems to delete.
     * @example
     * // Delete a few AboutWhyChooseUsItems
     * const { count } = await prisma.aboutWhyChooseUsItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutWhyChooseUsItemDeleteManyArgs>(args?: SelectSubset<T, AboutWhyChooseUsItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutWhyChooseUsItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutWhyChooseUsItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutWhyChooseUsItems
     * const aboutWhyChooseUsItem = await prisma.aboutWhyChooseUsItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutWhyChooseUsItemUpdateManyArgs>(args: SelectSubset<T, AboutWhyChooseUsItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AboutWhyChooseUsItem.
     * @param {AboutWhyChooseUsItemUpsertArgs} args - Arguments to update or create a AboutWhyChooseUsItem.
     * @example
     * // Update or create a AboutWhyChooseUsItem
     * const aboutWhyChooseUsItem = await prisma.aboutWhyChooseUsItem.upsert({
     *   create: {
     *     // ... data to create a AboutWhyChooseUsItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutWhyChooseUsItem we want to update
     *   }
     * })
     */
    upsert<T extends AboutWhyChooseUsItemUpsertArgs>(args: SelectSubset<T, AboutWhyChooseUsItemUpsertArgs<ExtArgs>>): Prisma__AboutWhyChooseUsItemClient<$Result.GetResult<Prisma.$AboutWhyChooseUsItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AboutWhyChooseUsItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutWhyChooseUsItemCountArgs} args - Arguments to filter AboutWhyChooseUsItems to count.
     * @example
     * // Count the number of AboutWhyChooseUsItems
     * const count = await prisma.aboutWhyChooseUsItem.count({
     *   where: {
     *     // ... the filter for the AboutWhyChooseUsItems we want to count
     *   }
     * })
    **/
    count<T extends AboutWhyChooseUsItemCountArgs>(
      args?: Subset<T, AboutWhyChooseUsItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutWhyChooseUsItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutWhyChooseUsItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutWhyChooseUsItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutWhyChooseUsItemAggregateArgs>(args: Subset<T, AboutWhyChooseUsItemAggregateArgs>): Prisma.PrismaPromise<GetAboutWhyChooseUsItemAggregateType<T>>

    /**
     * Group by AboutWhyChooseUsItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutWhyChooseUsItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutWhyChooseUsItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutWhyChooseUsItemGroupByArgs['orderBy'] }
        : { orderBy?: AboutWhyChooseUsItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutWhyChooseUsItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutWhyChooseUsItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutWhyChooseUsItem model
   */
  readonly fields: AboutWhyChooseUsItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutWhyChooseUsItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutWhyChooseUsItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutWhyChooseUsItem model
   */ 
  interface AboutWhyChooseUsItemFieldRefs {
    readonly id: FieldRef<"AboutWhyChooseUsItem", 'Int'>
    readonly icon: FieldRef<"AboutWhyChooseUsItem", 'String'>
    readonly title: FieldRef<"AboutWhyChooseUsItem", 'String'>
    readonly description: FieldRef<"AboutWhyChooseUsItem", 'String'>
    readonly displayOrder: FieldRef<"AboutWhyChooseUsItem", 'Int'>
    readonly isEnabled: FieldRef<"AboutWhyChooseUsItem", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AboutWhyChooseUsItem findUnique
   */
  export type AboutWhyChooseUsItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutWhyChooseUsItem
     */
    select?: AboutWhyChooseUsItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutWhyChooseUsItem to fetch.
     */
    where: AboutWhyChooseUsItemWhereUniqueInput
  }

  /**
   * AboutWhyChooseUsItem findUniqueOrThrow
   */
  export type AboutWhyChooseUsItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutWhyChooseUsItem
     */
    select?: AboutWhyChooseUsItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutWhyChooseUsItem to fetch.
     */
    where: AboutWhyChooseUsItemWhereUniqueInput
  }

  /**
   * AboutWhyChooseUsItem findFirst
   */
  export type AboutWhyChooseUsItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutWhyChooseUsItem
     */
    select?: AboutWhyChooseUsItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutWhyChooseUsItem to fetch.
     */
    where?: AboutWhyChooseUsItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutWhyChooseUsItems to fetch.
     */
    orderBy?: AboutWhyChooseUsItemOrderByWithRelationInput | AboutWhyChooseUsItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutWhyChooseUsItems.
     */
    cursor?: AboutWhyChooseUsItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutWhyChooseUsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutWhyChooseUsItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutWhyChooseUsItems.
     */
    distinct?: AboutWhyChooseUsItemScalarFieldEnum | AboutWhyChooseUsItemScalarFieldEnum[]
  }

  /**
   * AboutWhyChooseUsItem findFirstOrThrow
   */
  export type AboutWhyChooseUsItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutWhyChooseUsItem
     */
    select?: AboutWhyChooseUsItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutWhyChooseUsItem to fetch.
     */
    where?: AboutWhyChooseUsItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutWhyChooseUsItems to fetch.
     */
    orderBy?: AboutWhyChooseUsItemOrderByWithRelationInput | AboutWhyChooseUsItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutWhyChooseUsItems.
     */
    cursor?: AboutWhyChooseUsItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutWhyChooseUsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutWhyChooseUsItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutWhyChooseUsItems.
     */
    distinct?: AboutWhyChooseUsItemScalarFieldEnum | AboutWhyChooseUsItemScalarFieldEnum[]
  }

  /**
   * AboutWhyChooseUsItem findMany
   */
  export type AboutWhyChooseUsItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutWhyChooseUsItem
     */
    select?: AboutWhyChooseUsItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutWhyChooseUsItems to fetch.
     */
    where?: AboutWhyChooseUsItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutWhyChooseUsItems to fetch.
     */
    orderBy?: AboutWhyChooseUsItemOrderByWithRelationInput | AboutWhyChooseUsItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutWhyChooseUsItems.
     */
    cursor?: AboutWhyChooseUsItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutWhyChooseUsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutWhyChooseUsItems.
     */
    skip?: number
    distinct?: AboutWhyChooseUsItemScalarFieldEnum | AboutWhyChooseUsItemScalarFieldEnum[]
  }

  /**
   * AboutWhyChooseUsItem create
   */
  export type AboutWhyChooseUsItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutWhyChooseUsItem
     */
    select?: AboutWhyChooseUsItemSelect<ExtArgs> | null
    /**
     * The data needed to create a AboutWhyChooseUsItem.
     */
    data: XOR<AboutWhyChooseUsItemCreateInput, AboutWhyChooseUsItemUncheckedCreateInput>
  }

  /**
   * AboutWhyChooseUsItem createMany
   */
  export type AboutWhyChooseUsItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutWhyChooseUsItems.
     */
    data: AboutWhyChooseUsItemCreateManyInput | AboutWhyChooseUsItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutWhyChooseUsItem createManyAndReturn
   */
  export type AboutWhyChooseUsItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutWhyChooseUsItem
     */
    select?: AboutWhyChooseUsItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AboutWhyChooseUsItems.
     */
    data: AboutWhyChooseUsItemCreateManyInput | AboutWhyChooseUsItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutWhyChooseUsItem update
   */
  export type AboutWhyChooseUsItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutWhyChooseUsItem
     */
    select?: AboutWhyChooseUsItemSelect<ExtArgs> | null
    /**
     * The data needed to update a AboutWhyChooseUsItem.
     */
    data: XOR<AboutWhyChooseUsItemUpdateInput, AboutWhyChooseUsItemUncheckedUpdateInput>
    /**
     * Choose, which AboutWhyChooseUsItem to update.
     */
    where: AboutWhyChooseUsItemWhereUniqueInput
  }

  /**
   * AboutWhyChooseUsItem updateMany
   */
  export type AboutWhyChooseUsItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutWhyChooseUsItems.
     */
    data: XOR<AboutWhyChooseUsItemUpdateManyMutationInput, AboutWhyChooseUsItemUncheckedUpdateManyInput>
    /**
     * Filter which AboutWhyChooseUsItems to update
     */
    where?: AboutWhyChooseUsItemWhereInput
  }

  /**
   * AboutWhyChooseUsItem upsert
   */
  export type AboutWhyChooseUsItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutWhyChooseUsItem
     */
    select?: AboutWhyChooseUsItemSelect<ExtArgs> | null
    /**
     * The filter to search for the AboutWhyChooseUsItem to update in case it exists.
     */
    where: AboutWhyChooseUsItemWhereUniqueInput
    /**
     * In case the AboutWhyChooseUsItem found by the `where` argument doesn't exist, create a new AboutWhyChooseUsItem with this data.
     */
    create: XOR<AboutWhyChooseUsItemCreateInput, AboutWhyChooseUsItemUncheckedCreateInput>
    /**
     * In case the AboutWhyChooseUsItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutWhyChooseUsItemUpdateInput, AboutWhyChooseUsItemUncheckedUpdateInput>
  }

  /**
   * AboutWhyChooseUsItem delete
   */
  export type AboutWhyChooseUsItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutWhyChooseUsItem
     */
    select?: AboutWhyChooseUsItemSelect<ExtArgs> | null
    /**
     * Filter which AboutWhyChooseUsItem to delete.
     */
    where: AboutWhyChooseUsItemWhereUniqueInput
  }

  /**
   * AboutWhyChooseUsItem deleteMany
   */
  export type AboutWhyChooseUsItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutWhyChooseUsItems to delete
     */
    where?: AboutWhyChooseUsItemWhereInput
  }

  /**
   * AboutWhyChooseUsItem without action
   */
  export type AboutWhyChooseUsItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutWhyChooseUsItem
     */
    select?: AboutWhyChooseUsItemSelect<ExtArgs> | null
  }


  /**
   * Model AboutValueItem
   */

  export type AggregateAboutValueItem = {
    _count: AboutValueItemCountAggregateOutputType | null
    _avg: AboutValueItemAvgAggregateOutputType | null
    _sum: AboutValueItemSumAggregateOutputType | null
    _min: AboutValueItemMinAggregateOutputType | null
    _max: AboutValueItemMaxAggregateOutputType | null
  }

  export type AboutValueItemAvgAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type AboutValueItemSumAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type AboutValueItemMinAggregateOutputType = {
    id: number | null
    icon: string | null
    title: string | null
    description: string | null
    displayOrder: number | null
    isEnabled: boolean | null
  }

  export type AboutValueItemMaxAggregateOutputType = {
    id: number | null
    icon: string | null
    title: string | null
    description: string | null
    displayOrder: number | null
    isEnabled: boolean | null
  }

  export type AboutValueItemCountAggregateOutputType = {
    id: number
    icon: number
    title: number
    description: number
    displayOrder: number
    isEnabled: number
    _all: number
  }


  export type AboutValueItemAvgAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type AboutValueItemSumAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type AboutValueItemMinAggregateInputType = {
    id?: true
    icon?: true
    title?: true
    description?: true
    displayOrder?: true
    isEnabled?: true
  }

  export type AboutValueItemMaxAggregateInputType = {
    id?: true
    icon?: true
    title?: true
    description?: true
    displayOrder?: true
    isEnabled?: true
  }

  export type AboutValueItemCountAggregateInputType = {
    id?: true
    icon?: true
    title?: true
    description?: true
    displayOrder?: true
    isEnabled?: true
    _all?: true
  }

  export type AboutValueItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutValueItem to aggregate.
     */
    where?: AboutValueItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutValueItems to fetch.
     */
    orderBy?: AboutValueItemOrderByWithRelationInput | AboutValueItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutValueItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutValueItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutValueItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutValueItems
    **/
    _count?: true | AboutValueItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutValueItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutValueItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutValueItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutValueItemMaxAggregateInputType
  }

  export type GetAboutValueItemAggregateType<T extends AboutValueItemAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutValueItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutValueItem[P]>
      : GetScalarType<T[P], AggregateAboutValueItem[P]>
  }




  export type AboutValueItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutValueItemWhereInput
    orderBy?: AboutValueItemOrderByWithAggregationInput | AboutValueItemOrderByWithAggregationInput[]
    by: AboutValueItemScalarFieldEnum[] | AboutValueItemScalarFieldEnum
    having?: AboutValueItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutValueItemCountAggregateInputType | true
    _avg?: AboutValueItemAvgAggregateInputType
    _sum?: AboutValueItemSumAggregateInputType
    _min?: AboutValueItemMinAggregateInputType
    _max?: AboutValueItemMaxAggregateInputType
  }

  export type AboutValueItemGroupByOutputType = {
    id: number
    icon: string
    title: string
    description: string
    displayOrder: number
    isEnabled: boolean
    _count: AboutValueItemCountAggregateOutputType | null
    _avg: AboutValueItemAvgAggregateOutputType | null
    _sum: AboutValueItemSumAggregateOutputType | null
    _min: AboutValueItemMinAggregateOutputType | null
    _max: AboutValueItemMaxAggregateOutputType | null
  }

  type GetAboutValueItemGroupByPayload<T extends AboutValueItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutValueItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutValueItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutValueItemGroupByOutputType[P]>
            : GetScalarType<T[P], AboutValueItemGroupByOutputType[P]>
        }
      >
    >


  export type AboutValueItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }, ExtArgs["result"]["aboutValueItem"]>

  export type AboutValueItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }, ExtArgs["result"]["aboutValueItem"]>

  export type AboutValueItemSelectScalar = {
    id?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }


  export type $AboutValueItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutValueItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      icon: string
      title: string
      description: string
      displayOrder: number
      isEnabled: boolean
    }, ExtArgs["result"]["aboutValueItem"]>
    composites: {}
  }

  type AboutValueItemGetPayload<S extends boolean | null | undefined | AboutValueItemDefaultArgs> = $Result.GetResult<Prisma.$AboutValueItemPayload, S>

  type AboutValueItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AboutValueItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AboutValueItemCountAggregateInputType | true
    }

  export interface AboutValueItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutValueItem'], meta: { name: 'AboutValueItem' } }
    /**
     * Find zero or one AboutValueItem that matches the filter.
     * @param {AboutValueItemFindUniqueArgs} args - Arguments to find a AboutValueItem
     * @example
     * // Get one AboutValueItem
     * const aboutValueItem = await prisma.aboutValueItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutValueItemFindUniqueArgs>(args: SelectSubset<T, AboutValueItemFindUniqueArgs<ExtArgs>>): Prisma__AboutValueItemClient<$Result.GetResult<Prisma.$AboutValueItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AboutValueItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AboutValueItemFindUniqueOrThrowArgs} args - Arguments to find a AboutValueItem
     * @example
     * // Get one AboutValueItem
     * const aboutValueItem = await prisma.aboutValueItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutValueItemFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutValueItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutValueItemClient<$Result.GetResult<Prisma.$AboutValueItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AboutValueItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutValueItemFindFirstArgs} args - Arguments to find a AboutValueItem
     * @example
     * // Get one AboutValueItem
     * const aboutValueItem = await prisma.aboutValueItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutValueItemFindFirstArgs>(args?: SelectSubset<T, AboutValueItemFindFirstArgs<ExtArgs>>): Prisma__AboutValueItemClient<$Result.GetResult<Prisma.$AboutValueItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AboutValueItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutValueItemFindFirstOrThrowArgs} args - Arguments to find a AboutValueItem
     * @example
     * // Get one AboutValueItem
     * const aboutValueItem = await prisma.aboutValueItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutValueItemFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutValueItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutValueItemClient<$Result.GetResult<Prisma.$AboutValueItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AboutValueItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutValueItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutValueItems
     * const aboutValueItems = await prisma.aboutValueItem.findMany()
     * 
     * // Get first 10 AboutValueItems
     * const aboutValueItems = await prisma.aboutValueItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutValueItemWithIdOnly = await prisma.aboutValueItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutValueItemFindManyArgs>(args?: SelectSubset<T, AboutValueItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutValueItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AboutValueItem.
     * @param {AboutValueItemCreateArgs} args - Arguments to create a AboutValueItem.
     * @example
     * // Create one AboutValueItem
     * const AboutValueItem = await prisma.aboutValueItem.create({
     *   data: {
     *     // ... data to create a AboutValueItem
     *   }
     * })
     * 
     */
    create<T extends AboutValueItemCreateArgs>(args: SelectSubset<T, AboutValueItemCreateArgs<ExtArgs>>): Prisma__AboutValueItemClient<$Result.GetResult<Prisma.$AboutValueItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AboutValueItems.
     * @param {AboutValueItemCreateManyArgs} args - Arguments to create many AboutValueItems.
     * @example
     * // Create many AboutValueItems
     * const aboutValueItem = await prisma.aboutValueItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutValueItemCreateManyArgs>(args?: SelectSubset<T, AboutValueItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutValueItems and returns the data saved in the database.
     * @param {AboutValueItemCreateManyAndReturnArgs} args - Arguments to create many AboutValueItems.
     * @example
     * // Create many AboutValueItems
     * const aboutValueItem = await prisma.aboutValueItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutValueItems and only return the `id`
     * const aboutValueItemWithIdOnly = await prisma.aboutValueItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutValueItemCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutValueItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutValueItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AboutValueItem.
     * @param {AboutValueItemDeleteArgs} args - Arguments to delete one AboutValueItem.
     * @example
     * // Delete one AboutValueItem
     * const AboutValueItem = await prisma.aboutValueItem.delete({
     *   where: {
     *     // ... filter to delete one AboutValueItem
     *   }
     * })
     * 
     */
    delete<T extends AboutValueItemDeleteArgs>(args: SelectSubset<T, AboutValueItemDeleteArgs<ExtArgs>>): Prisma__AboutValueItemClient<$Result.GetResult<Prisma.$AboutValueItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AboutValueItem.
     * @param {AboutValueItemUpdateArgs} args - Arguments to update one AboutValueItem.
     * @example
     * // Update one AboutValueItem
     * const aboutValueItem = await prisma.aboutValueItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutValueItemUpdateArgs>(args: SelectSubset<T, AboutValueItemUpdateArgs<ExtArgs>>): Prisma__AboutValueItemClient<$Result.GetResult<Prisma.$AboutValueItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AboutValueItems.
     * @param {AboutValueItemDeleteManyArgs} args - Arguments to filter AboutValueItems to delete.
     * @example
     * // Delete a few AboutValueItems
     * const { count } = await prisma.aboutValueItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutValueItemDeleteManyArgs>(args?: SelectSubset<T, AboutValueItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutValueItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutValueItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutValueItems
     * const aboutValueItem = await prisma.aboutValueItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutValueItemUpdateManyArgs>(args: SelectSubset<T, AboutValueItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AboutValueItem.
     * @param {AboutValueItemUpsertArgs} args - Arguments to update or create a AboutValueItem.
     * @example
     * // Update or create a AboutValueItem
     * const aboutValueItem = await prisma.aboutValueItem.upsert({
     *   create: {
     *     // ... data to create a AboutValueItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutValueItem we want to update
     *   }
     * })
     */
    upsert<T extends AboutValueItemUpsertArgs>(args: SelectSubset<T, AboutValueItemUpsertArgs<ExtArgs>>): Prisma__AboutValueItemClient<$Result.GetResult<Prisma.$AboutValueItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AboutValueItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutValueItemCountArgs} args - Arguments to filter AboutValueItems to count.
     * @example
     * // Count the number of AboutValueItems
     * const count = await prisma.aboutValueItem.count({
     *   where: {
     *     // ... the filter for the AboutValueItems we want to count
     *   }
     * })
    **/
    count<T extends AboutValueItemCountArgs>(
      args?: Subset<T, AboutValueItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutValueItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutValueItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutValueItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutValueItemAggregateArgs>(args: Subset<T, AboutValueItemAggregateArgs>): Prisma.PrismaPromise<GetAboutValueItemAggregateType<T>>

    /**
     * Group by AboutValueItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutValueItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutValueItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutValueItemGroupByArgs['orderBy'] }
        : { orderBy?: AboutValueItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutValueItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutValueItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutValueItem model
   */
  readonly fields: AboutValueItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutValueItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutValueItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutValueItem model
   */ 
  interface AboutValueItemFieldRefs {
    readonly id: FieldRef<"AboutValueItem", 'Int'>
    readonly icon: FieldRef<"AboutValueItem", 'String'>
    readonly title: FieldRef<"AboutValueItem", 'String'>
    readonly description: FieldRef<"AboutValueItem", 'String'>
    readonly displayOrder: FieldRef<"AboutValueItem", 'Int'>
    readonly isEnabled: FieldRef<"AboutValueItem", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AboutValueItem findUnique
   */
  export type AboutValueItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutValueItem
     */
    select?: AboutValueItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutValueItem to fetch.
     */
    where: AboutValueItemWhereUniqueInput
  }

  /**
   * AboutValueItem findUniqueOrThrow
   */
  export type AboutValueItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutValueItem
     */
    select?: AboutValueItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutValueItem to fetch.
     */
    where: AboutValueItemWhereUniqueInput
  }

  /**
   * AboutValueItem findFirst
   */
  export type AboutValueItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutValueItem
     */
    select?: AboutValueItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutValueItem to fetch.
     */
    where?: AboutValueItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutValueItems to fetch.
     */
    orderBy?: AboutValueItemOrderByWithRelationInput | AboutValueItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutValueItems.
     */
    cursor?: AboutValueItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutValueItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutValueItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutValueItems.
     */
    distinct?: AboutValueItemScalarFieldEnum | AboutValueItemScalarFieldEnum[]
  }

  /**
   * AboutValueItem findFirstOrThrow
   */
  export type AboutValueItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutValueItem
     */
    select?: AboutValueItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutValueItem to fetch.
     */
    where?: AboutValueItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutValueItems to fetch.
     */
    orderBy?: AboutValueItemOrderByWithRelationInput | AboutValueItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutValueItems.
     */
    cursor?: AboutValueItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutValueItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutValueItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutValueItems.
     */
    distinct?: AboutValueItemScalarFieldEnum | AboutValueItemScalarFieldEnum[]
  }

  /**
   * AboutValueItem findMany
   */
  export type AboutValueItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutValueItem
     */
    select?: AboutValueItemSelect<ExtArgs> | null
    /**
     * Filter, which AboutValueItems to fetch.
     */
    where?: AboutValueItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutValueItems to fetch.
     */
    orderBy?: AboutValueItemOrderByWithRelationInput | AboutValueItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutValueItems.
     */
    cursor?: AboutValueItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutValueItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutValueItems.
     */
    skip?: number
    distinct?: AboutValueItemScalarFieldEnum | AboutValueItemScalarFieldEnum[]
  }

  /**
   * AboutValueItem create
   */
  export type AboutValueItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutValueItem
     */
    select?: AboutValueItemSelect<ExtArgs> | null
    /**
     * The data needed to create a AboutValueItem.
     */
    data: XOR<AboutValueItemCreateInput, AboutValueItemUncheckedCreateInput>
  }

  /**
   * AboutValueItem createMany
   */
  export type AboutValueItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutValueItems.
     */
    data: AboutValueItemCreateManyInput | AboutValueItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutValueItem createManyAndReturn
   */
  export type AboutValueItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutValueItem
     */
    select?: AboutValueItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AboutValueItems.
     */
    data: AboutValueItemCreateManyInput | AboutValueItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutValueItem update
   */
  export type AboutValueItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutValueItem
     */
    select?: AboutValueItemSelect<ExtArgs> | null
    /**
     * The data needed to update a AboutValueItem.
     */
    data: XOR<AboutValueItemUpdateInput, AboutValueItemUncheckedUpdateInput>
    /**
     * Choose, which AboutValueItem to update.
     */
    where: AboutValueItemWhereUniqueInput
  }

  /**
   * AboutValueItem updateMany
   */
  export type AboutValueItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutValueItems.
     */
    data: XOR<AboutValueItemUpdateManyMutationInput, AboutValueItemUncheckedUpdateManyInput>
    /**
     * Filter which AboutValueItems to update
     */
    where?: AboutValueItemWhereInput
  }

  /**
   * AboutValueItem upsert
   */
  export type AboutValueItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutValueItem
     */
    select?: AboutValueItemSelect<ExtArgs> | null
    /**
     * The filter to search for the AboutValueItem to update in case it exists.
     */
    where: AboutValueItemWhereUniqueInput
    /**
     * In case the AboutValueItem found by the `where` argument doesn't exist, create a new AboutValueItem with this data.
     */
    create: XOR<AboutValueItemCreateInput, AboutValueItemUncheckedCreateInput>
    /**
     * In case the AboutValueItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutValueItemUpdateInput, AboutValueItemUncheckedUpdateInput>
  }

  /**
   * AboutValueItem delete
   */
  export type AboutValueItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutValueItem
     */
    select?: AboutValueItemSelect<ExtArgs> | null
    /**
     * Filter which AboutValueItem to delete.
     */
    where: AboutValueItemWhereUniqueInput
  }

  /**
   * AboutValueItem deleteMany
   */
  export type AboutValueItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutValueItems to delete
     */
    where?: AboutValueItemWhereInput
  }

  /**
   * AboutValueItem without action
   */
  export type AboutValueItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutValueItem
     */
    select?: AboutValueItemSelect<ExtArgs> | null
  }


  /**
   * Model AboutGalleryImage
   */

  export type AggregateAboutGalleryImage = {
    _count: AboutGalleryImageCountAggregateOutputType | null
    _avg: AboutGalleryImageAvgAggregateOutputType | null
    _sum: AboutGalleryImageSumAggregateOutputType | null
    _min: AboutGalleryImageMinAggregateOutputType | null
    _max: AboutGalleryImageMaxAggregateOutputType | null
  }

  export type AboutGalleryImageAvgAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type AboutGalleryImageSumAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type AboutGalleryImageMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    title: string | null
    description: string | null
    displayOrder: number | null
    isEnabled: boolean | null
  }

  export type AboutGalleryImageMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    title: string | null
    description: string | null
    displayOrder: number | null
    isEnabled: boolean | null
  }

  export type AboutGalleryImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    title: number
    description: number
    displayOrder: number
    isEnabled: number
    _all: number
  }


  export type AboutGalleryImageAvgAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type AboutGalleryImageSumAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type AboutGalleryImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    title?: true
    description?: true
    displayOrder?: true
    isEnabled?: true
  }

  export type AboutGalleryImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    title?: true
    description?: true
    displayOrder?: true
    isEnabled?: true
  }

  export type AboutGalleryImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    title?: true
    description?: true
    displayOrder?: true
    isEnabled?: true
    _all?: true
  }

  export type AboutGalleryImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutGalleryImage to aggregate.
     */
    where?: AboutGalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutGalleryImages to fetch.
     */
    orderBy?: AboutGalleryImageOrderByWithRelationInput | AboutGalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutGalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutGalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutGalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutGalleryImages
    **/
    _count?: true | AboutGalleryImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutGalleryImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutGalleryImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutGalleryImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutGalleryImageMaxAggregateInputType
  }

  export type GetAboutGalleryImageAggregateType<T extends AboutGalleryImageAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutGalleryImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutGalleryImage[P]>
      : GetScalarType<T[P], AggregateAboutGalleryImage[P]>
  }




  export type AboutGalleryImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutGalleryImageWhereInput
    orderBy?: AboutGalleryImageOrderByWithAggregationInput | AboutGalleryImageOrderByWithAggregationInput[]
    by: AboutGalleryImageScalarFieldEnum[] | AboutGalleryImageScalarFieldEnum
    having?: AboutGalleryImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutGalleryImageCountAggregateInputType | true
    _avg?: AboutGalleryImageAvgAggregateInputType
    _sum?: AboutGalleryImageSumAggregateInputType
    _min?: AboutGalleryImageMinAggregateInputType
    _max?: AboutGalleryImageMaxAggregateInputType
  }

  export type AboutGalleryImageGroupByOutputType = {
    id: number
    imageUrl: string
    title: string | null
    description: string | null
    displayOrder: number
    isEnabled: boolean
    _count: AboutGalleryImageCountAggregateOutputType | null
    _avg: AboutGalleryImageAvgAggregateOutputType | null
    _sum: AboutGalleryImageSumAggregateOutputType | null
    _min: AboutGalleryImageMinAggregateOutputType | null
    _max: AboutGalleryImageMaxAggregateOutputType | null
  }

  type GetAboutGalleryImageGroupByPayload<T extends AboutGalleryImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutGalleryImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutGalleryImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutGalleryImageGroupByOutputType[P]>
            : GetScalarType<T[P], AboutGalleryImageGroupByOutputType[P]>
        }
      >
    >


  export type AboutGalleryImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    description?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }, ExtArgs["result"]["aboutGalleryImage"]>

  export type AboutGalleryImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    description?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }, ExtArgs["result"]["aboutGalleryImage"]>

  export type AboutGalleryImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    description?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }


  export type $AboutGalleryImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutGalleryImage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string
      title: string | null
      description: string | null
      displayOrder: number
      isEnabled: boolean
    }, ExtArgs["result"]["aboutGalleryImage"]>
    composites: {}
  }

  type AboutGalleryImageGetPayload<S extends boolean | null | undefined | AboutGalleryImageDefaultArgs> = $Result.GetResult<Prisma.$AboutGalleryImagePayload, S>

  type AboutGalleryImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AboutGalleryImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AboutGalleryImageCountAggregateInputType | true
    }

  export interface AboutGalleryImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutGalleryImage'], meta: { name: 'AboutGalleryImage' } }
    /**
     * Find zero or one AboutGalleryImage that matches the filter.
     * @param {AboutGalleryImageFindUniqueArgs} args - Arguments to find a AboutGalleryImage
     * @example
     * // Get one AboutGalleryImage
     * const aboutGalleryImage = await prisma.aboutGalleryImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutGalleryImageFindUniqueArgs>(args: SelectSubset<T, AboutGalleryImageFindUniqueArgs<ExtArgs>>): Prisma__AboutGalleryImageClient<$Result.GetResult<Prisma.$AboutGalleryImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AboutGalleryImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AboutGalleryImageFindUniqueOrThrowArgs} args - Arguments to find a AboutGalleryImage
     * @example
     * // Get one AboutGalleryImage
     * const aboutGalleryImage = await prisma.aboutGalleryImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutGalleryImageFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutGalleryImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutGalleryImageClient<$Result.GetResult<Prisma.$AboutGalleryImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AboutGalleryImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutGalleryImageFindFirstArgs} args - Arguments to find a AboutGalleryImage
     * @example
     * // Get one AboutGalleryImage
     * const aboutGalleryImage = await prisma.aboutGalleryImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutGalleryImageFindFirstArgs>(args?: SelectSubset<T, AboutGalleryImageFindFirstArgs<ExtArgs>>): Prisma__AboutGalleryImageClient<$Result.GetResult<Prisma.$AboutGalleryImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AboutGalleryImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutGalleryImageFindFirstOrThrowArgs} args - Arguments to find a AboutGalleryImage
     * @example
     * // Get one AboutGalleryImage
     * const aboutGalleryImage = await prisma.aboutGalleryImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutGalleryImageFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutGalleryImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutGalleryImageClient<$Result.GetResult<Prisma.$AboutGalleryImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AboutGalleryImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutGalleryImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutGalleryImages
     * const aboutGalleryImages = await prisma.aboutGalleryImage.findMany()
     * 
     * // Get first 10 AboutGalleryImages
     * const aboutGalleryImages = await prisma.aboutGalleryImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutGalleryImageWithIdOnly = await prisma.aboutGalleryImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutGalleryImageFindManyArgs>(args?: SelectSubset<T, AboutGalleryImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutGalleryImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AboutGalleryImage.
     * @param {AboutGalleryImageCreateArgs} args - Arguments to create a AboutGalleryImage.
     * @example
     * // Create one AboutGalleryImage
     * const AboutGalleryImage = await prisma.aboutGalleryImage.create({
     *   data: {
     *     // ... data to create a AboutGalleryImage
     *   }
     * })
     * 
     */
    create<T extends AboutGalleryImageCreateArgs>(args: SelectSubset<T, AboutGalleryImageCreateArgs<ExtArgs>>): Prisma__AboutGalleryImageClient<$Result.GetResult<Prisma.$AboutGalleryImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AboutGalleryImages.
     * @param {AboutGalleryImageCreateManyArgs} args - Arguments to create many AboutGalleryImages.
     * @example
     * // Create many AboutGalleryImages
     * const aboutGalleryImage = await prisma.aboutGalleryImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutGalleryImageCreateManyArgs>(args?: SelectSubset<T, AboutGalleryImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutGalleryImages and returns the data saved in the database.
     * @param {AboutGalleryImageCreateManyAndReturnArgs} args - Arguments to create many AboutGalleryImages.
     * @example
     * // Create many AboutGalleryImages
     * const aboutGalleryImage = await prisma.aboutGalleryImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutGalleryImages and only return the `id`
     * const aboutGalleryImageWithIdOnly = await prisma.aboutGalleryImage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutGalleryImageCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutGalleryImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutGalleryImagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AboutGalleryImage.
     * @param {AboutGalleryImageDeleteArgs} args - Arguments to delete one AboutGalleryImage.
     * @example
     * // Delete one AboutGalleryImage
     * const AboutGalleryImage = await prisma.aboutGalleryImage.delete({
     *   where: {
     *     // ... filter to delete one AboutGalleryImage
     *   }
     * })
     * 
     */
    delete<T extends AboutGalleryImageDeleteArgs>(args: SelectSubset<T, AboutGalleryImageDeleteArgs<ExtArgs>>): Prisma__AboutGalleryImageClient<$Result.GetResult<Prisma.$AboutGalleryImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AboutGalleryImage.
     * @param {AboutGalleryImageUpdateArgs} args - Arguments to update one AboutGalleryImage.
     * @example
     * // Update one AboutGalleryImage
     * const aboutGalleryImage = await prisma.aboutGalleryImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutGalleryImageUpdateArgs>(args: SelectSubset<T, AboutGalleryImageUpdateArgs<ExtArgs>>): Prisma__AboutGalleryImageClient<$Result.GetResult<Prisma.$AboutGalleryImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AboutGalleryImages.
     * @param {AboutGalleryImageDeleteManyArgs} args - Arguments to filter AboutGalleryImages to delete.
     * @example
     * // Delete a few AboutGalleryImages
     * const { count } = await prisma.aboutGalleryImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutGalleryImageDeleteManyArgs>(args?: SelectSubset<T, AboutGalleryImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutGalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutGalleryImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutGalleryImages
     * const aboutGalleryImage = await prisma.aboutGalleryImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutGalleryImageUpdateManyArgs>(args: SelectSubset<T, AboutGalleryImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AboutGalleryImage.
     * @param {AboutGalleryImageUpsertArgs} args - Arguments to update or create a AboutGalleryImage.
     * @example
     * // Update or create a AboutGalleryImage
     * const aboutGalleryImage = await prisma.aboutGalleryImage.upsert({
     *   create: {
     *     // ... data to create a AboutGalleryImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutGalleryImage we want to update
     *   }
     * })
     */
    upsert<T extends AboutGalleryImageUpsertArgs>(args: SelectSubset<T, AboutGalleryImageUpsertArgs<ExtArgs>>): Prisma__AboutGalleryImageClient<$Result.GetResult<Prisma.$AboutGalleryImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AboutGalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutGalleryImageCountArgs} args - Arguments to filter AboutGalleryImages to count.
     * @example
     * // Count the number of AboutGalleryImages
     * const count = await prisma.aboutGalleryImage.count({
     *   where: {
     *     // ... the filter for the AboutGalleryImages we want to count
     *   }
     * })
    **/
    count<T extends AboutGalleryImageCountArgs>(
      args?: Subset<T, AboutGalleryImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutGalleryImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutGalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutGalleryImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutGalleryImageAggregateArgs>(args: Subset<T, AboutGalleryImageAggregateArgs>): Prisma.PrismaPromise<GetAboutGalleryImageAggregateType<T>>

    /**
     * Group by AboutGalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutGalleryImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutGalleryImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutGalleryImageGroupByArgs['orderBy'] }
        : { orderBy?: AboutGalleryImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutGalleryImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutGalleryImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutGalleryImage model
   */
  readonly fields: AboutGalleryImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutGalleryImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutGalleryImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutGalleryImage model
   */ 
  interface AboutGalleryImageFieldRefs {
    readonly id: FieldRef<"AboutGalleryImage", 'Int'>
    readonly imageUrl: FieldRef<"AboutGalleryImage", 'String'>
    readonly title: FieldRef<"AboutGalleryImage", 'String'>
    readonly description: FieldRef<"AboutGalleryImage", 'String'>
    readonly displayOrder: FieldRef<"AboutGalleryImage", 'Int'>
    readonly isEnabled: FieldRef<"AboutGalleryImage", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AboutGalleryImage findUnique
   */
  export type AboutGalleryImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutGalleryImage
     */
    select?: AboutGalleryImageSelect<ExtArgs> | null
    /**
     * Filter, which AboutGalleryImage to fetch.
     */
    where: AboutGalleryImageWhereUniqueInput
  }

  /**
   * AboutGalleryImage findUniqueOrThrow
   */
  export type AboutGalleryImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutGalleryImage
     */
    select?: AboutGalleryImageSelect<ExtArgs> | null
    /**
     * Filter, which AboutGalleryImage to fetch.
     */
    where: AboutGalleryImageWhereUniqueInput
  }

  /**
   * AboutGalleryImage findFirst
   */
  export type AboutGalleryImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutGalleryImage
     */
    select?: AboutGalleryImageSelect<ExtArgs> | null
    /**
     * Filter, which AboutGalleryImage to fetch.
     */
    where?: AboutGalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutGalleryImages to fetch.
     */
    orderBy?: AboutGalleryImageOrderByWithRelationInput | AboutGalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutGalleryImages.
     */
    cursor?: AboutGalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutGalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutGalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutGalleryImages.
     */
    distinct?: AboutGalleryImageScalarFieldEnum | AboutGalleryImageScalarFieldEnum[]
  }

  /**
   * AboutGalleryImage findFirstOrThrow
   */
  export type AboutGalleryImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutGalleryImage
     */
    select?: AboutGalleryImageSelect<ExtArgs> | null
    /**
     * Filter, which AboutGalleryImage to fetch.
     */
    where?: AboutGalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutGalleryImages to fetch.
     */
    orderBy?: AboutGalleryImageOrderByWithRelationInput | AboutGalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutGalleryImages.
     */
    cursor?: AboutGalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutGalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutGalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutGalleryImages.
     */
    distinct?: AboutGalleryImageScalarFieldEnum | AboutGalleryImageScalarFieldEnum[]
  }

  /**
   * AboutGalleryImage findMany
   */
  export type AboutGalleryImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutGalleryImage
     */
    select?: AboutGalleryImageSelect<ExtArgs> | null
    /**
     * Filter, which AboutGalleryImages to fetch.
     */
    where?: AboutGalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutGalleryImages to fetch.
     */
    orderBy?: AboutGalleryImageOrderByWithRelationInput | AboutGalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutGalleryImages.
     */
    cursor?: AboutGalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutGalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutGalleryImages.
     */
    skip?: number
    distinct?: AboutGalleryImageScalarFieldEnum | AboutGalleryImageScalarFieldEnum[]
  }

  /**
   * AboutGalleryImage create
   */
  export type AboutGalleryImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutGalleryImage
     */
    select?: AboutGalleryImageSelect<ExtArgs> | null
    /**
     * The data needed to create a AboutGalleryImage.
     */
    data: XOR<AboutGalleryImageCreateInput, AboutGalleryImageUncheckedCreateInput>
  }

  /**
   * AboutGalleryImage createMany
   */
  export type AboutGalleryImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutGalleryImages.
     */
    data: AboutGalleryImageCreateManyInput | AboutGalleryImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutGalleryImage createManyAndReturn
   */
  export type AboutGalleryImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutGalleryImage
     */
    select?: AboutGalleryImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AboutGalleryImages.
     */
    data: AboutGalleryImageCreateManyInput | AboutGalleryImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutGalleryImage update
   */
  export type AboutGalleryImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutGalleryImage
     */
    select?: AboutGalleryImageSelect<ExtArgs> | null
    /**
     * The data needed to update a AboutGalleryImage.
     */
    data: XOR<AboutGalleryImageUpdateInput, AboutGalleryImageUncheckedUpdateInput>
    /**
     * Choose, which AboutGalleryImage to update.
     */
    where: AboutGalleryImageWhereUniqueInput
  }

  /**
   * AboutGalleryImage updateMany
   */
  export type AboutGalleryImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutGalleryImages.
     */
    data: XOR<AboutGalleryImageUpdateManyMutationInput, AboutGalleryImageUncheckedUpdateManyInput>
    /**
     * Filter which AboutGalleryImages to update
     */
    where?: AboutGalleryImageWhereInput
  }

  /**
   * AboutGalleryImage upsert
   */
  export type AboutGalleryImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutGalleryImage
     */
    select?: AboutGalleryImageSelect<ExtArgs> | null
    /**
     * The filter to search for the AboutGalleryImage to update in case it exists.
     */
    where: AboutGalleryImageWhereUniqueInput
    /**
     * In case the AboutGalleryImage found by the `where` argument doesn't exist, create a new AboutGalleryImage with this data.
     */
    create: XOR<AboutGalleryImageCreateInput, AboutGalleryImageUncheckedCreateInput>
    /**
     * In case the AboutGalleryImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutGalleryImageUpdateInput, AboutGalleryImageUncheckedUpdateInput>
  }

  /**
   * AboutGalleryImage delete
   */
  export type AboutGalleryImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutGalleryImage
     */
    select?: AboutGalleryImageSelect<ExtArgs> | null
    /**
     * Filter which AboutGalleryImage to delete.
     */
    where: AboutGalleryImageWhereUniqueInput
  }

  /**
   * AboutGalleryImage deleteMany
   */
  export type AboutGalleryImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutGalleryImages to delete
     */
    where?: AboutGalleryImageWhereInput
  }

  /**
   * AboutGalleryImage without action
   */
  export type AboutGalleryImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutGalleryImage
     */
    select?: AboutGalleryImageSelect<ExtArgs> | null
  }


  /**
   * Model AboutCertification
   */

  export type AggregateAboutCertification = {
    _count: AboutCertificationCountAggregateOutputType | null
    _avg: AboutCertificationAvgAggregateOutputType | null
    _sum: AboutCertificationSumAggregateOutputType | null
    _min: AboutCertificationMinAggregateOutputType | null
    _max: AboutCertificationMaxAggregateOutputType | null
  }

  export type AboutCertificationAvgAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type AboutCertificationSumAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type AboutCertificationMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    title: string | null
    description: string | null
    issuer: string | null
    displayOrder: number | null
    isEnabled: boolean | null
  }

  export type AboutCertificationMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    title: string | null
    description: string | null
    issuer: string | null
    displayOrder: number | null
    isEnabled: boolean | null
  }

  export type AboutCertificationCountAggregateOutputType = {
    id: number
    imageUrl: number
    title: number
    description: number
    issuer: number
    displayOrder: number
    isEnabled: number
    _all: number
  }


  export type AboutCertificationAvgAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type AboutCertificationSumAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type AboutCertificationMinAggregateInputType = {
    id?: true
    imageUrl?: true
    title?: true
    description?: true
    issuer?: true
    displayOrder?: true
    isEnabled?: true
  }

  export type AboutCertificationMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    title?: true
    description?: true
    issuer?: true
    displayOrder?: true
    isEnabled?: true
  }

  export type AboutCertificationCountAggregateInputType = {
    id?: true
    imageUrl?: true
    title?: true
    description?: true
    issuer?: true
    displayOrder?: true
    isEnabled?: true
    _all?: true
  }

  export type AboutCertificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutCertification to aggregate.
     */
    where?: AboutCertificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutCertifications to fetch.
     */
    orderBy?: AboutCertificationOrderByWithRelationInput | AboutCertificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutCertificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutCertifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutCertifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutCertifications
    **/
    _count?: true | AboutCertificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutCertificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutCertificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutCertificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutCertificationMaxAggregateInputType
  }

  export type GetAboutCertificationAggregateType<T extends AboutCertificationAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutCertification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutCertification[P]>
      : GetScalarType<T[P], AggregateAboutCertification[P]>
  }




  export type AboutCertificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutCertificationWhereInput
    orderBy?: AboutCertificationOrderByWithAggregationInput | AboutCertificationOrderByWithAggregationInput[]
    by: AboutCertificationScalarFieldEnum[] | AboutCertificationScalarFieldEnum
    having?: AboutCertificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutCertificationCountAggregateInputType | true
    _avg?: AboutCertificationAvgAggregateInputType
    _sum?: AboutCertificationSumAggregateInputType
    _min?: AboutCertificationMinAggregateInputType
    _max?: AboutCertificationMaxAggregateInputType
  }

  export type AboutCertificationGroupByOutputType = {
    id: number
    imageUrl: string | null
    title: string
    description: string | null
    issuer: string | null
    displayOrder: number
    isEnabled: boolean
    _count: AboutCertificationCountAggregateOutputType | null
    _avg: AboutCertificationAvgAggregateOutputType | null
    _sum: AboutCertificationSumAggregateOutputType | null
    _min: AboutCertificationMinAggregateOutputType | null
    _max: AboutCertificationMaxAggregateOutputType | null
  }

  type GetAboutCertificationGroupByPayload<T extends AboutCertificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutCertificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutCertificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutCertificationGroupByOutputType[P]>
            : GetScalarType<T[P], AboutCertificationGroupByOutputType[P]>
        }
      >
    >


  export type AboutCertificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    description?: boolean
    issuer?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }, ExtArgs["result"]["aboutCertification"]>

  export type AboutCertificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    description?: boolean
    issuer?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }, ExtArgs["result"]["aboutCertification"]>

  export type AboutCertificationSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    description?: boolean
    issuer?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
  }


  export type $AboutCertificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutCertification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string | null
      title: string
      description: string | null
      issuer: string | null
      displayOrder: number
      isEnabled: boolean
    }, ExtArgs["result"]["aboutCertification"]>
    composites: {}
  }

  type AboutCertificationGetPayload<S extends boolean | null | undefined | AboutCertificationDefaultArgs> = $Result.GetResult<Prisma.$AboutCertificationPayload, S>

  type AboutCertificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AboutCertificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AboutCertificationCountAggregateInputType | true
    }

  export interface AboutCertificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutCertification'], meta: { name: 'AboutCertification' } }
    /**
     * Find zero or one AboutCertification that matches the filter.
     * @param {AboutCertificationFindUniqueArgs} args - Arguments to find a AboutCertification
     * @example
     * // Get one AboutCertification
     * const aboutCertification = await prisma.aboutCertification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutCertificationFindUniqueArgs>(args: SelectSubset<T, AboutCertificationFindUniqueArgs<ExtArgs>>): Prisma__AboutCertificationClient<$Result.GetResult<Prisma.$AboutCertificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AboutCertification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AboutCertificationFindUniqueOrThrowArgs} args - Arguments to find a AboutCertification
     * @example
     * // Get one AboutCertification
     * const aboutCertification = await prisma.aboutCertification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutCertificationFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutCertificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutCertificationClient<$Result.GetResult<Prisma.$AboutCertificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AboutCertification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutCertificationFindFirstArgs} args - Arguments to find a AboutCertification
     * @example
     * // Get one AboutCertification
     * const aboutCertification = await prisma.aboutCertification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutCertificationFindFirstArgs>(args?: SelectSubset<T, AboutCertificationFindFirstArgs<ExtArgs>>): Prisma__AboutCertificationClient<$Result.GetResult<Prisma.$AboutCertificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AboutCertification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutCertificationFindFirstOrThrowArgs} args - Arguments to find a AboutCertification
     * @example
     * // Get one AboutCertification
     * const aboutCertification = await prisma.aboutCertification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutCertificationFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutCertificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutCertificationClient<$Result.GetResult<Prisma.$AboutCertificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AboutCertifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutCertificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutCertifications
     * const aboutCertifications = await prisma.aboutCertification.findMany()
     * 
     * // Get first 10 AboutCertifications
     * const aboutCertifications = await prisma.aboutCertification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutCertificationWithIdOnly = await prisma.aboutCertification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutCertificationFindManyArgs>(args?: SelectSubset<T, AboutCertificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutCertificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AboutCertification.
     * @param {AboutCertificationCreateArgs} args - Arguments to create a AboutCertification.
     * @example
     * // Create one AboutCertification
     * const AboutCertification = await prisma.aboutCertification.create({
     *   data: {
     *     // ... data to create a AboutCertification
     *   }
     * })
     * 
     */
    create<T extends AboutCertificationCreateArgs>(args: SelectSubset<T, AboutCertificationCreateArgs<ExtArgs>>): Prisma__AboutCertificationClient<$Result.GetResult<Prisma.$AboutCertificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AboutCertifications.
     * @param {AboutCertificationCreateManyArgs} args - Arguments to create many AboutCertifications.
     * @example
     * // Create many AboutCertifications
     * const aboutCertification = await prisma.aboutCertification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutCertificationCreateManyArgs>(args?: SelectSubset<T, AboutCertificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutCertifications and returns the data saved in the database.
     * @param {AboutCertificationCreateManyAndReturnArgs} args - Arguments to create many AboutCertifications.
     * @example
     * // Create many AboutCertifications
     * const aboutCertification = await prisma.aboutCertification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutCertifications and only return the `id`
     * const aboutCertificationWithIdOnly = await prisma.aboutCertification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutCertificationCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutCertificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutCertificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AboutCertification.
     * @param {AboutCertificationDeleteArgs} args - Arguments to delete one AboutCertification.
     * @example
     * // Delete one AboutCertification
     * const AboutCertification = await prisma.aboutCertification.delete({
     *   where: {
     *     // ... filter to delete one AboutCertification
     *   }
     * })
     * 
     */
    delete<T extends AboutCertificationDeleteArgs>(args: SelectSubset<T, AboutCertificationDeleteArgs<ExtArgs>>): Prisma__AboutCertificationClient<$Result.GetResult<Prisma.$AboutCertificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AboutCertification.
     * @param {AboutCertificationUpdateArgs} args - Arguments to update one AboutCertification.
     * @example
     * // Update one AboutCertification
     * const aboutCertification = await prisma.aboutCertification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutCertificationUpdateArgs>(args: SelectSubset<T, AboutCertificationUpdateArgs<ExtArgs>>): Prisma__AboutCertificationClient<$Result.GetResult<Prisma.$AboutCertificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AboutCertifications.
     * @param {AboutCertificationDeleteManyArgs} args - Arguments to filter AboutCertifications to delete.
     * @example
     * // Delete a few AboutCertifications
     * const { count } = await prisma.aboutCertification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutCertificationDeleteManyArgs>(args?: SelectSubset<T, AboutCertificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutCertifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutCertificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutCertifications
     * const aboutCertification = await prisma.aboutCertification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutCertificationUpdateManyArgs>(args: SelectSubset<T, AboutCertificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AboutCertification.
     * @param {AboutCertificationUpsertArgs} args - Arguments to update or create a AboutCertification.
     * @example
     * // Update or create a AboutCertification
     * const aboutCertification = await prisma.aboutCertification.upsert({
     *   create: {
     *     // ... data to create a AboutCertification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutCertification we want to update
     *   }
     * })
     */
    upsert<T extends AboutCertificationUpsertArgs>(args: SelectSubset<T, AboutCertificationUpsertArgs<ExtArgs>>): Prisma__AboutCertificationClient<$Result.GetResult<Prisma.$AboutCertificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AboutCertifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutCertificationCountArgs} args - Arguments to filter AboutCertifications to count.
     * @example
     * // Count the number of AboutCertifications
     * const count = await prisma.aboutCertification.count({
     *   where: {
     *     // ... the filter for the AboutCertifications we want to count
     *   }
     * })
    **/
    count<T extends AboutCertificationCountArgs>(
      args?: Subset<T, AboutCertificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutCertificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutCertification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutCertificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutCertificationAggregateArgs>(args: Subset<T, AboutCertificationAggregateArgs>): Prisma.PrismaPromise<GetAboutCertificationAggregateType<T>>

    /**
     * Group by AboutCertification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutCertificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutCertificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutCertificationGroupByArgs['orderBy'] }
        : { orderBy?: AboutCertificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutCertificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutCertificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutCertification model
   */
  readonly fields: AboutCertificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutCertification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutCertificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutCertification model
   */ 
  interface AboutCertificationFieldRefs {
    readonly id: FieldRef<"AboutCertification", 'Int'>
    readonly imageUrl: FieldRef<"AboutCertification", 'String'>
    readonly title: FieldRef<"AboutCertification", 'String'>
    readonly description: FieldRef<"AboutCertification", 'String'>
    readonly issuer: FieldRef<"AboutCertification", 'String'>
    readonly displayOrder: FieldRef<"AboutCertification", 'Int'>
    readonly isEnabled: FieldRef<"AboutCertification", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AboutCertification findUnique
   */
  export type AboutCertificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutCertification
     */
    select?: AboutCertificationSelect<ExtArgs> | null
    /**
     * Filter, which AboutCertification to fetch.
     */
    where: AboutCertificationWhereUniqueInput
  }

  /**
   * AboutCertification findUniqueOrThrow
   */
  export type AboutCertificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutCertification
     */
    select?: AboutCertificationSelect<ExtArgs> | null
    /**
     * Filter, which AboutCertification to fetch.
     */
    where: AboutCertificationWhereUniqueInput
  }

  /**
   * AboutCertification findFirst
   */
  export type AboutCertificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutCertification
     */
    select?: AboutCertificationSelect<ExtArgs> | null
    /**
     * Filter, which AboutCertification to fetch.
     */
    where?: AboutCertificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutCertifications to fetch.
     */
    orderBy?: AboutCertificationOrderByWithRelationInput | AboutCertificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutCertifications.
     */
    cursor?: AboutCertificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutCertifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutCertifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutCertifications.
     */
    distinct?: AboutCertificationScalarFieldEnum | AboutCertificationScalarFieldEnum[]
  }

  /**
   * AboutCertification findFirstOrThrow
   */
  export type AboutCertificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutCertification
     */
    select?: AboutCertificationSelect<ExtArgs> | null
    /**
     * Filter, which AboutCertification to fetch.
     */
    where?: AboutCertificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutCertifications to fetch.
     */
    orderBy?: AboutCertificationOrderByWithRelationInput | AboutCertificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutCertifications.
     */
    cursor?: AboutCertificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutCertifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutCertifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutCertifications.
     */
    distinct?: AboutCertificationScalarFieldEnum | AboutCertificationScalarFieldEnum[]
  }

  /**
   * AboutCertification findMany
   */
  export type AboutCertificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutCertification
     */
    select?: AboutCertificationSelect<ExtArgs> | null
    /**
     * Filter, which AboutCertifications to fetch.
     */
    where?: AboutCertificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutCertifications to fetch.
     */
    orderBy?: AboutCertificationOrderByWithRelationInput | AboutCertificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutCertifications.
     */
    cursor?: AboutCertificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutCertifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutCertifications.
     */
    skip?: number
    distinct?: AboutCertificationScalarFieldEnum | AboutCertificationScalarFieldEnum[]
  }

  /**
   * AboutCertification create
   */
  export type AboutCertificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutCertification
     */
    select?: AboutCertificationSelect<ExtArgs> | null
    /**
     * The data needed to create a AboutCertification.
     */
    data: XOR<AboutCertificationCreateInput, AboutCertificationUncheckedCreateInput>
  }

  /**
   * AboutCertification createMany
   */
  export type AboutCertificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutCertifications.
     */
    data: AboutCertificationCreateManyInput | AboutCertificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutCertification createManyAndReturn
   */
  export type AboutCertificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutCertification
     */
    select?: AboutCertificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AboutCertifications.
     */
    data: AboutCertificationCreateManyInput | AboutCertificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutCertification update
   */
  export type AboutCertificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutCertification
     */
    select?: AboutCertificationSelect<ExtArgs> | null
    /**
     * The data needed to update a AboutCertification.
     */
    data: XOR<AboutCertificationUpdateInput, AboutCertificationUncheckedUpdateInput>
    /**
     * Choose, which AboutCertification to update.
     */
    where: AboutCertificationWhereUniqueInput
  }

  /**
   * AboutCertification updateMany
   */
  export type AboutCertificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutCertifications.
     */
    data: XOR<AboutCertificationUpdateManyMutationInput, AboutCertificationUncheckedUpdateManyInput>
    /**
     * Filter which AboutCertifications to update
     */
    where?: AboutCertificationWhereInput
  }

  /**
   * AboutCertification upsert
   */
  export type AboutCertificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutCertification
     */
    select?: AboutCertificationSelect<ExtArgs> | null
    /**
     * The filter to search for the AboutCertification to update in case it exists.
     */
    where: AboutCertificationWhereUniqueInput
    /**
     * In case the AboutCertification found by the `where` argument doesn't exist, create a new AboutCertification with this data.
     */
    create: XOR<AboutCertificationCreateInput, AboutCertificationUncheckedCreateInput>
    /**
     * In case the AboutCertification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutCertificationUpdateInput, AboutCertificationUncheckedUpdateInput>
  }

  /**
   * AboutCertification delete
   */
  export type AboutCertificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutCertification
     */
    select?: AboutCertificationSelect<ExtArgs> | null
    /**
     * Filter which AboutCertification to delete.
     */
    where: AboutCertificationWhereUniqueInput
  }

  /**
   * AboutCertification deleteMany
   */
  export type AboutCertificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutCertifications to delete
     */
    where?: AboutCertificationWhereInput
  }

  /**
   * AboutCertification without action
   */
  export type AboutCertificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutCertification
     */
    select?: AboutCertificationSelect<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    teluguName: string | null
    englishName: string | null
    teluguSubtitle: string | null
    englishSubtitle: string | null
    description: string | null
    imageUrl: string | null
    displayOrder: number | null
    isEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    teluguName: string | null
    englishName: string | null
    teluguSubtitle: string | null
    englishSubtitle: string | null
    description: string | null
    imageUrl: string | null
    displayOrder: number | null
    isEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    teluguName: number
    englishName: number
    teluguSubtitle: number
    englishSubtitle: number
    description: number
    imageUrl: number
    displayOrder: number
    isEnabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    teluguName?: true
    englishName?: true
    teluguSubtitle?: true
    englishSubtitle?: true
    description?: true
    imageUrl?: true
    displayOrder?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    teluguName?: true
    englishName?: true
    teluguSubtitle?: true
    englishSubtitle?: true
    description?: true
    imageUrl?: true
    displayOrder?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    teluguName?: true
    englishName?: true
    teluguSubtitle?: true
    englishSubtitle?: true
    description?: true
    imageUrl?: true
    displayOrder?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    teluguName: string
    englishName: string
    teluguSubtitle: string | null
    englishSubtitle: string | null
    description: string | null
    imageUrl: string | null
    displayOrder: number
    isEnabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teluguName?: boolean
    englishName?: boolean
    teluguSubtitle?: boolean
    englishSubtitle?: boolean
    description?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medicines?: boolean | Category$medicinesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teluguName?: boolean
    englishName?: boolean
    teluguSubtitle?: boolean
    englishSubtitle?: boolean
    description?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    teluguName?: boolean
    englishName?: boolean
    teluguSubtitle?: boolean
    englishSubtitle?: boolean
    description?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicines?: boolean | Category$medicinesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      medicines: Prisma.$MedicinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      teluguName: string
      englishName: string
      teluguSubtitle: string | null
      englishSubtitle: string | null
      description: string | null
      imageUrl: string | null
      displayOrder: number
      isEnabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicines<T extends Category$medicinesArgs<ExtArgs> = {}>(args?: Subset<T, Category$medicinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly teluguName: FieldRef<"Category", 'String'>
    readonly englishName: FieldRef<"Category", 'String'>
    readonly teluguSubtitle: FieldRef<"Category", 'String'>
    readonly englishSubtitle: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly imageUrl: FieldRef<"Category", 'String'>
    readonly displayOrder: FieldRef<"Category", 'Int'>
    readonly isEnabled: FieldRef<"Category", 'Boolean'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.medicines
   */
  export type Category$medicinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    where?: MedicineWhereInput
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    cursor?: MedicineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Medicine
   */

  export type AggregateMedicine = {
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  export type MedicineAvgAggregateOutputType = {
    id: number | null
    price: number | null
    discountPrice: number | null
    displayOrder: number | null
  }

  export type MedicineSumAggregateOutputType = {
    id: number | null
    price: number | null
    discountPrice: number | null
    displayOrder: number | null
  }

  export type MedicineMinAggregateOutputType = {
    id: number | null
    name: string | null
    teluguName: string | null
    englishName: string | null
    slug: string | null
    description: string | null
    shortDescription: string | null
    price: number | null
    discountPrice: number | null
    quantity: string | null
    imageUrl: string | null
    availability: string | null
    whatsappEnabled: boolean | null
    displayOrder: number | null
    ingredients: string | null
    benefits: string | null
    usageInstructions: string | null
    isFeatured: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicineMaxAggregateOutputType = {
    id: number | null
    name: string | null
    teluguName: string | null
    englishName: string | null
    slug: string | null
    description: string | null
    shortDescription: string | null
    price: number | null
    discountPrice: number | null
    quantity: string | null
    imageUrl: string | null
    availability: string | null
    whatsappEnabled: boolean | null
    displayOrder: number | null
    ingredients: string | null
    benefits: string | null
    usageInstructions: string | null
    isFeatured: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicineCountAggregateOutputType = {
    id: number
    name: number
    teluguName: number
    englishName: number
    slug: number
    description: number
    shortDescription: number
    price: number
    discountPrice: number
    quantity: number
    imageUrl: number
    availability: number
    whatsappEnabled: number
    displayOrder: number
    ingredients: number
    benefits: number
    usageInstructions: number
    isFeatured: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicineAvgAggregateInputType = {
    id?: true
    price?: true
    discountPrice?: true
    displayOrder?: true
  }

  export type MedicineSumAggregateInputType = {
    id?: true
    price?: true
    discountPrice?: true
    displayOrder?: true
  }

  export type MedicineMinAggregateInputType = {
    id?: true
    name?: true
    teluguName?: true
    englishName?: true
    slug?: true
    description?: true
    shortDescription?: true
    price?: true
    discountPrice?: true
    quantity?: true
    imageUrl?: true
    availability?: true
    whatsappEnabled?: true
    displayOrder?: true
    ingredients?: true
    benefits?: true
    usageInstructions?: true
    isFeatured?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicineMaxAggregateInputType = {
    id?: true
    name?: true
    teluguName?: true
    englishName?: true
    slug?: true
    description?: true
    shortDescription?: true
    price?: true
    discountPrice?: true
    quantity?: true
    imageUrl?: true
    availability?: true
    whatsappEnabled?: true
    displayOrder?: true
    ingredients?: true
    benefits?: true
    usageInstructions?: true
    isFeatured?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicineCountAggregateInputType = {
    id?: true
    name?: true
    teluguName?: true
    englishName?: true
    slug?: true
    description?: true
    shortDescription?: true
    price?: true
    discountPrice?: true
    quantity?: true
    imageUrl?: true
    availability?: true
    whatsappEnabled?: true
    displayOrder?: true
    ingredients?: true
    benefits?: true
    usageInstructions?: true
    isFeatured?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicine to aggregate.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicines
    **/
    _count?: true | MedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineMaxAggregateInputType
  }

  export type GetMedicineAggregateType<T extends MedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicine[P]>
      : GetScalarType<T[P], AggregateMedicine[P]>
  }




  export type MedicineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineWhereInput
    orderBy?: MedicineOrderByWithAggregationInput | MedicineOrderByWithAggregationInput[]
    by: MedicineScalarFieldEnum[] | MedicineScalarFieldEnum
    having?: MedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineCountAggregateInputType | true
    _avg?: MedicineAvgAggregateInputType
    _sum?: MedicineSumAggregateInputType
    _min?: MedicineMinAggregateInputType
    _max?: MedicineMaxAggregateInputType
  }

  export type MedicineGroupByOutputType = {
    id: number
    name: string
    teluguName: string
    englishName: string | null
    slug: string
    description: string
    shortDescription: string | null
    price: number
    discountPrice: number | null
    quantity: string | null
    imageUrl: string | null
    availability: string
    whatsappEnabled: boolean
    displayOrder: number
    ingredients: string | null
    benefits: string | null
    usageInstructions: string | null
    isFeatured: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  type GetMedicineGroupByPayload<T extends MedicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineGroupByOutputType[P]>
        }
      >
    >


  export type MedicineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teluguName?: boolean
    englishName?: boolean
    slug?: boolean
    description?: boolean
    shortDescription?: boolean
    price?: boolean
    discountPrice?: boolean
    quantity?: boolean
    imageUrl?: boolean
    availability?: boolean
    whatsappEnabled?: boolean
    displayOrder?: boolean
    ingredients?: boolean
    benefits?: boolean
    usageInstructions?: boolean
    isFeatured?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categories?: boolean | Medicine$categoriesArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teluguName?: boolean
    englishName?: boolean
    slug?: boolean
    description?: boolean
    shortDescription?: boolean
    price?: boolean
    discountPrice?: boolean
    quantity?: boolean
    imageUrl?: boolean
    availability?: boolean
    whatsappEnabled?: boolean
    displayOrder?: boolean
    ingredients?: boolean
    benefits?: boolean
    usageInstructions?: boolean
    isFeatured?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectScalar = {
    id?: boolean
    name?: boolean
    teluguName?: boolean
    englishName?: boolean
    slug?: boolean
    description?: boolean
    shortDescription?: boolean
    price?: boolean
    discountPrice?: boolean
    quantity?: boolean
    imageUrl?: boolean
    availability?: boolean
    whatsappEnabled?: boolean
    displayOrder?: boolean
    ingredients?: boolean
    benefits?: boolean
    usageInstructions?: boolean
    isFeatured?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Medicine$categoriesArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicine"
    objects: {
      categories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      teluguName: string
      englishName: string | null
      slug: string
      description: string
      shortDescription: string | null
      price: number
      discountPrice: number | null
      quantity: string | null
      imageUrl: string | null
      availability: string
      whatsappEnabled: boolean
      displayOrder: number
      ingredients: string | null
      benefits: string | null
      usageInstructions: string | null
      isFeatured: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicine"]>
    composites: {}
  }

  type MedicineGetPayload<S extends boolean | null | undefined | MedicineDefaultArgs> = $Result.GetResult<Prisma.$MedicinePayload, S>

  type MedicineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicineCountAggregateInputType | true
    }

  export interface MedicineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicine'], meta: { name: 'Medicine' } }
    /**
     * Find zero or one Medicine that matches the filter.
     * @param {MedicineFindUniqueArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineFindUniqueArgs>(args: SelectSubset<T, MedicineFindUniqueArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Medicine that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MedicineFindUniqueOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Medicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineFindFirstArgs>(args?: SelectSubset<T, MedicineFindFirstArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Medicine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicine.findMany()
     * 
     * // Get first 10 Medicines
     * const medicines = await prisma.medicine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineWithIdOnly = await prisma.medicine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicineFindManyArgs>(args?: SelectSubset<T, MedicineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Medicine.
     * @param {MedicineCreateArgs} args - Arguments to create a Medicine.
     * @example
     * // Create one Medicine
     * const Medicine = await prisma.medicine.create({
     *   data: {
     *     // ... data to create a Medicine
     *   }
     * })
     * 
     */
    create<T extends MedicineCreateArgs>(args: SelectSubset<T, MedicineCreateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Medicines.
     * @param {MedicineCreateManyArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineCreateManyArgs>(args?: SelectSubset<T, MedicineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicines and returns the data saved in the database.
     * @param {MedicineCreateManyAndReturnArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicineCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Medicine.
     * @param {MedicineDeleteArgs} args - Arguments to delete one Medicine.
     * @example
     * // Delete one Medicine
     * const Medicine = await prisma.medicine.delete({
     *   where: {
     *     // ... filter to delete one Medicine
     *   }
     * })
     * 
     */
    delete<T extends MedicineDeleteArgs>(args: SelectSubset<T, MedicineDeleteArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Medicine.
     * @param {MedicineUpdateArgs} args - Arguments to update one Medicine.
     * @example
     * // Update one Medicine
     * const medicine = await prisma.medicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineUpdateArgs>(args: SelectSubset<T, MedicineUpdateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Medicines.
     * @param {MedicineDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineDeleteManyArgs>(args?: SelectSubset<T, MedicineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineUpdateManyArgs>(args: SelectSubset<T, MedicineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medicine.
     * @param {MedicineUpsertArgs} args - Arguments to update or create a Medicine.
     * @example
     * // Update or create a Medicine
     * const medicine = await prisma.medicine.upsert({
     *   create: {
     *     // ... data to create a Medicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicine we want to update
     *   }
     * })
     */
    upsert<T extends MedicineUpsertArgs>(args: SelectSubset<T, MedicineUpsertArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicine.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends MedicineCountArgs>(
      args?: Subset<T, MedicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicineAggregateArgs>(args: Subset<T, MedicineAggregateArgs>): Prisma.PrismaPromise<GetMedicineAggregateType<T>>

    /**
     * Group by Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineGroupByArgs['orderBy'] }
        : { orderBy?: MedicineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicine model
   */
  readonly fields: MedicineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Medicine$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medicine model
   */ 
  interface MedicineFieldRefs {
    readonly id: FieldRef<"Medicine", 'Int'>
    readonly name: FieldRef<"Medicine", 'String'>
    readonly teluguName: FieldRef<"Medicine", 'String'>
    readonly englishName: FieldRef<"Medicine", 'String'>
    readonly slug: FieldRef<"Medicine", 'String'>
    readonly description: FieldRef<"Medicine", 'String'>
    readonly shortDescription: FieldRef<"Medicine", 'String'>
    readonly price: FieldRef<"Medicine", 'Float'>
    readonly discountPrice: FieldRef<"Medicine", 'Float'>
    readonly quantity: FieldRef<"Medicine", 'String'>
    readonly imageUrl: FieldRef<"Medicine", 'String'>
    readonly availability: FieldRef<"Medicine", 'String'>
    readonly whatsappEnabled: FieldRef<"Medicine", 'Boolean'>
    readonly displayOrder: FieldRef<"Medicine", 'Int'>
    readonly ingredients: FieldRef<"Medicine", 'String'>
    readonly benefits: FieldRef<"Medicine", 'String'>
    readonly usageInstructions: FieldRef<"Medicine", 'String'>
    readonly isFeatured: FieldRef<"Medicine", 'Boolean'>
    readonly isActive: FieldRef<"Medicine", 'Boolean'>
    readonly createdAt: FieldRef<"Medicine", 'DateTime'>
    readonly updatedAt: FieldRef<"Medicine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Medicine findUnique
   */
  export type MedicineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findUniqueOrThrow
   */
  export type MedicineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findFirst
   */
  export type MedicineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findFirstOrThrow
   */
  export type MedicineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findMany
   */
  export type MedicineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicines to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine create
   */
  export type MedicineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to create a Medicine.
     */
    data: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
  }

  /**
   * Medicine createMany
   */
  export type MedicineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicine createManyAndReturn
   */
  export type MedicineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicine update
   */
  export type MedicineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to update a Medicine.
     */
    data: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
    /**
     * Choose, which Medicine to update.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine updateMany
   */
  export type MedicineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
  }

  /**
   * Medicine upsert
   */
  export type MedicineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The filter to search for the Medicine to update in case it exists.
     */
    where: MedicineWhereUniqueInput
    /**
     * In case the Medicine found by the `where` argument doesn't exist, create a new Medicine with this data.
     */
    create: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
    /**
     * In case the Medicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
  }

  /**
   * Medicine delete
   */
  export type MedicineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter which Medicine to delete.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine deleteMany
   */
  export type MedicineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicines to delete
     */
    where?: MedicineWhereInput
  }

  /**
   * Medicine.categories
   */
  export type Medicine$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Medicine without action
   */
  export type MedicineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
  }


  /**
   * Model Benefit
   */

  export type AggregateBenefit = {
    _count: BenefitCountAggregateOutputType | null
    _avg: BenefitAvgAggregateOutputType | null
    _sum: BenefitSumAggregateOutputType | null
    _min: BenefitMinAggregateOutputType | null
    _max: BenefitMaxAggregateOutputType | null
  }

  export type BenefitAvgAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type BenefitSumAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type BenefitMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    imageUrl: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BenefitMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    imageUrl: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BenefitCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    displayOrder: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BenefitAvgAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type BenefitSumAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type BenefitMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BenefitMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BenefitCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BenefitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Benefit to aggregate.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Benefits
    **/
    _count?: true | BenefitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BenefitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BenefitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BenefitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BenefitMaxAggregateInputType
  }

  export type GetBenefitAggregateType<T extends BenefitAggregateArgs> = {
        [P in keyof T & keyof AggregateBenefit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBenefit[P]>
      : GetScalarType<T[P], AggregateBenefit[P]>
  }




  export type BenefitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BenefitWhereInput
    orderBy?: BenefitOrderByWithAggregationInput | BenefitOrderByWithAggregationInput[]
    by: BenefitScalarFieldEnum[] | BenefitScalarFieldEnum
    having?: BenefitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BenefitCountAggregateInputType | true
    _avg?: BenefitAvgAggregateInputType
    _sum?: BenefitSumAggregateInputType
    _min?: BenefitMinAggregateInputType
    _max?: BenefitMaxAggregateInputType
  }

  export type BenefitGroupByOutputType = {
    id: number
    title: string
    description: string
    imageUrl: string | null
    displayOrder: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: BenefitCountAggregateOutputType | null
    _avg: BenefitAvgAggregateOutputType | null
    _sum: BenefitSumAggregateOutputType | null
    _min: BenefitMinAggregateOutputType | null
    _max: BenefitMaxAggregateOutputType | null
  }

  type GetBenefitGroupByPayload<T extends BenefitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BenefitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BenefitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BenefitGroupByOutputType[P]>
            : GetScalarType<T[P], BenefitGroupByOutputType[P]>
        }
      >
    >


  export type BenefitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $BenefitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Benefit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      imageUrl: string | null
      displayOrder: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["benefit"]>
    composites: {}
  }

  type BenefitGetPayload<S extends boolean | null | undefined | BenefitDefaultArgs> = $Result.GetResult<Prisma.$BenefitPayload, S>

  type BenefitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BenefitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BenefitCountAggregateInputType | true
    }

  export interface BenefitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Benefit'], meta: { name: 'Benefit' } }
    /**
     * Find zero or one Benefit that matches the filter.
     * @param {BenefitFindUniqueArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BenefitFindUniqueArgs>(args: SelectSubset<T, BenefitFindUniqueArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Benefit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BenefitFindUniqueOrThrowArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BenefitFindUniqueOrThrowArgs>(args: SelectSubset<T, BenefitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Benefit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindFirstArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BenefitFindFirstArgs>(args?: SelectSubset<T, BenefitFindFirstArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Benefit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindFirstOrThrowArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BenefitFindFirstOrThrowArgs>(args?: SelectSubset<T, BenefitFindFirstOrThrowArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Benefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Benefits
     * const benefits = await prisma.benefit.findMany()
     * 
     * // Get first 10 Benefits
     * const benefits = await prisma.benefit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const benefitWithIdOnly = await prisma.benefit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BenefitFindManyArgs>(args?: SelectSubset<T, BenefitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Benefit.
     * @param {BenefitCreateArgs} args - Arguments to create a Benefit.
     * @example
     * // Create one Benefit
     * const Benefit = await prisma.benefit.create({
     *   data: {
     *     // ... data to create a Benefit
     *   }
     * })
     * 
     */
    create<T extends BenefitCreateArgs>(args: SelectSubset<T, BenefitCreateArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Benefits.
     * @param {BenefitCreateManyArgs} args - Arguments to create many Benefits.
     * @example
     * // Create many Benefits
     * const benefit = await prisma.benefit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BenefitCreateManyArgs>(args?: SelectSubset<T, BenefitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Benefits and returns the data saved in the database.
     * @param {BenefitCreateManyAndReturnArgs} args - Arguments to create many Benefits.
     * @example
     * // Create many Benefits
     * const benefit = await prisma.benefit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Benefits and only return the `id`
     * const benefitWithIdOnly = await prisma.benefit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BenefitCreateManyAndReturnArgs>(args?: SelectSubset<T, BenefitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Benefit.
     * @param {BenefitDeleteArgs} args - Arguments to delete one Benefit.
     * @example
     * // Delete one Benefit
     * const Benefit = await prisma.benefit.delete({
     *   where: {
     *     // ... filter to delete one Benefit
     *   }
     * })
     * 
     */
    delete<T extends BenefitDeleteArgs>(args: SelectSubset<T, BenefitDeleteArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Benefit.
     * @param {BenefitUpdateArgs} args - Arguments to update one Benefit.
     * @example
     * // Update one Benefit
     * const benefit = await prisma.benefit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BenefitUpdateArgs>(args: SelectSubset<T, BenefitUpdateArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Benefits.
     * @param {BenefitDeleteManyArgs} args - Arguments to filter Benefits to delete.
     * @example
     * // Delete a few Benefits
     * const { count } = await prisma.benefit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BenefitDeleteManyArgs>(args?: SelectSubset<T, BenefitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Benefits
     * const benefit = await prisma.benefit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BenefitUpdateManyArgs>(args: SelectSubset<T, BenefitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Benefit.
     * @param {BenefitUpsertArgs} args - Arguments to update or create a Benefit.
     * @example
     * // Update or create a Benefit
     * const benefit = await prisma.benefit.upsert({
     *   create: {
     *     // ... data to create a Benefit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Benefit we want to update
     *   }
     * })
     */
    upsert<T extends BenefitUpsertArgs>(args: SelectSubset<T, BenefitUpsertArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitCountArgs} args - Arguments to filter Benefits to count.
     * @example
     * // Count the number of Benefits
     * const count = await prisma.benefit.count({
     *   where: {
     *     // ... the filter for the Benefits we want to count
     *   }
     * })
    **/
    count<T extends BenefitCountArgs>(
      args?: Subset<T, BenefitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BenefitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Benefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BenefitAggregateArgs>(args: Subset<T, BenefitAggregateArgs>): Prisma.PrismaPromise<GetBenefitAggregateType<T>>

    /**
     * Group by Benefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BenefitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BenefitGroupByArgs['orderBy'] }
        : { orderBy?: BenefitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BenefitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBenefitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Benefit model
   */
  readonly fields: BenefitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Benefit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BenefitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Benefit model
   */ 
  interface BenefitFieldRefs {
    readonly id: FieldRef<"Benefit", 'Int'>
    readonly title: FieldRef<"Benefit", 'String'>
    readonly description: FieldRef<"Benefit", 'String'>
    readonly imageUrl: FieldRef<"Benefit", 'String'>
    readonly displayOrder: FieldRef<"Benefit", 'Int'>
    readonly isActive: FieldRef<"Benefit", 'Boolean'>
    readonly createdAt: FieldRef<"Benefit", 'DateTime'>
    readonly updatedAt: FieldRef<"Benefit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Benefit findUnique
   */
  export type BenefitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit findUniqueOrThrow
   */
  export type BenefitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit findFirst
   */
  export type BenefitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benefits.
     */
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit findFirstOrThrow
   */
  export type BenefitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benefits.
     */
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit findMany
   */
  export type BenefitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Filter, which Benefits to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit create
   */
  export type BenefitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * The data needed to create a Benefit.
     */
    data: XOR<BenefitCreateInput, BenefitUncheckedCreateInput>
  }

  /**
   * Benefit createMany
   */
  export type BenefitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Benefits.
     */
    data: BenefitCreateManyInput | BenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Benefit createManyAndReturn
   */
  export type BenefitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Benefits.
     */
    data: BenefitCreateManyInput | BenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Benefit update
   */
  export type BenefitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * The data needed to update a Benefit.
     */
    data: XOR<BenefitUpdateInput, BenefitUncheckedUpdateInput>
    /**
     * Choose, which Benefit to update.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit updateMany
   */
  export type BenefitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Benefits.
     */
    data: XOR<BenefitUpdateManyMutationInput, BenefitUncheckedUpdateManyInput>
    /**
     * Filter which Benefits to update
     */
    where?: BenefitWhereInput
  }

  /**
   * Benefit upsert
   */
  export type BenefitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * The filter to search for the Benefit to update in case it exists.
     */
    where: BenefitWhereUniqueInput
    /**
     * In case the Benefit found by the `where` argument doesn't exist, create a new Benefit with this data.
     */
    create: XOR<BenefitCreateInput, BenefitUncheckedCreateInput>
    /**
     * In case the Benefit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BenefitUpdateInput, BenefitUncheckedUpdateInput>
  }

  /**
   * Benefit delete
   */
  export type BenefitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Filter which Benefit to delete.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit deleteMany
   */
  export type BenefitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Benefits to delete
     */
    where?: BenefitWhereInput
  }

  /**
   * Benefit without action
   */
  export type BenefitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
  }


  /**
   * Model Testimonial
   */

  export type AggregateTestimonial = {
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  export type TestimonialAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    displayOrder: number | null
  }

  export type TestimonialSumAggregateOutputType = {
    id: number | null
    rating: number | null
    displayOrder: number | null
  }

  export type TestimonialMinAggregateOutputType = {
    id: number | null
    name: string | null
    content: string | null
    rating: number | null
    imageUrl: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestimonialMaxAggregateOutputType = {
    id: number | null
    name: string | null
    content: string | null
    rating: number | null
    imageUrl: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestimonialCountAggregateOutputType = {
    id: number
    name: number
    content: number
    rating: number
    imageUrl: number
    displayOrder: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestimonialAvgAggregateInputType = {
    id?: true
    rating?: true
    displayOrder?: true
  }

  export type TestimonialSumAggregateInputType = {
    id?: true
    rating?: true
    displayOrder?: true
  }

  export type TestimonialMinAggregateInputType = {
    id?: true
    name?: true
    content?: true
    rating?: true
    imageUrl?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestimonialMaxAggregateInputType = {
    id?: true
    name?: true
    content?: true
    rating?: true
    imageUrl?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestimonialCountAggregateInputType = {
    id?: true
    name?: true
    content?: true
    rating?: true
    imageUrl?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestimonialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonial to aggregate.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testimonials
    **/
    _count?: true | TestimonialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestimonialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestimonialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialMaxAggregateInputType
  }

  export type GetTestimonialAggregateType<T extends TestimonialAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonial[P]>
      : GetScalarType<T[P], AggregateTestimonial[P]>
  }




  export type TestimonialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestimonialWhereInput
    orderBy?: TestimonialOrderByWithAggregationInput | TestimonialOrderByWithAggregationInput[]
    by: TestimonialScalarFieldEnum[] | TestimonialScalarFieldEnum
    having?: TestimonialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialCountAggregateInputType | true
    _avg?: TestimonialAvgAggregateInputType
    _sum?: TestimonialSumAggregateInputType
    _min?: TestimonialMinAggregateInputType
    _max?: TestimonialMaxAggregateInputType
  }

  export type TestimonialGroupByOutputType = {
    id: number
    name: string
    content: string
    rating: number
    imageUrl: string | null
    displayOrder: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  type GetTestimonialGroupByPayload<T extends TestimonialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestimonialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
        }
      >
    >


  export type TestimonialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    rating?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    rating?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectScalar = {
    id?: boolean
    name?: boolean
    content?: boolean
    rating?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $TestimonialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Testimonial"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      content: string
      rating: number
      imageUrl: string | null
      displayOrder: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testimonial"]>
    composites: {}
  }

  type TestimonialGetPayload<S extends boolean | null | undefined | TestimonialDefaultArgs> = $Result.GetResult<Prisma.$TestimonialPayload, S>

  type TestimonialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TestimonialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestimonialCountAggregateInputType | true
    }

  export interface TestimonialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Testimonial'], meta: { name: 'Testimonial' } }
    /**
     * Find zero or one Testimonial that matches the filter.
     * @param {TestimonialFindUniqueArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestimonialFindUniqueArgs>(args: SelectSubset<T, TestimonialFindUniqueArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Testimonial that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TestimonialFindUniqueOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestimonialFindUniqueOrThrowArgs>(args: SelectSubset<T, TestimonialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Testimonial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestimonialFindFirstArgs>(args?: SelectSubset<T, TestimonialFindFirstArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Testimonial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestimonialFindFirstOrThrowArgs>(args?: SelectSubset<T, TestimonialFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonial.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestimonialFindManyArgs>(args?: SelectSubset<T, TestimonialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Testimonial.
     * @param {TestimonialCreateArgs} args - Arguments to create a Testimonial.
     * @example
     * // Create one Testimonial
     * const Testimonial = await prisma.testimonial.create({
     *   data: {
     *     // ... data to create a Testimonial
     *   }
     * })
     * 
     */
    create<T extends TestimonialCreateArgs>(args: SelectSubset<T, TestimonialCreateArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Testimonials.
     * @param {TestimonialCreateManyArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestimonialCreateManyArgs>(args?: SelectSubset<T, TestimonialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testimonials and returns the data saved in the database.
     * @param {TestimonialCreateManyAndReturnArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testimonials and only return the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestimonialCreateManyAndReturnArgs>(args?: SelectSubset<T, TestimonialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Testimonial.
     * @param {TestimonialDeleteArgs} args - Arguments to delete one Testimonial.
     * @example
     * // Delete one Testimonial
     * const Testimonial = await prisma.testimonial.delete({
     *   where: {
     *     // ... filter to delete one Testimonial
     *   }
     * })
     * 
     */
    delete<T extends TestimonialDeleteArgs>(args: SelectSubset<T, TestimonialDeleteArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Testimonial.
     * @param {TestimonialUpdateArgs} args - Arguments to update one Testimonial.
     * @example
     * // Update one Testimonial
     * const testimonial = await prisma.testimonial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestimonialUpdateArgs>(args: SelectSubset<T, TestimonialUpdateArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Testimonials.
     * @param {TestimonialDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestimonialDeleteManyArgs>(args?: SelectSubset<T, TestimonialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestimonialUpdateManyArgs>(args: SelectSubset<T, TestimonialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Testimonial.
     * @param {TestimonialUpsertArgs} args - Arguments to update or create a Testimonial.
     * @example
     * // Update or create a Testimonial
     * const testimonial = await prisma.testimonial.upsert({
     *   create: {
     *     // ... data to create a Testimonial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonial we want to update
     *   }
     * })
     */
    upsert<T extends TestimonialUpsertArgs>(args: SelectSubset<T, TestimonialUpsertArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonial.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends TestimonialCountArgs>(
      args?: Subset<T, TestimonialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestimonialAggregateArgs>(args: Subset<T, TestimonialAggregateArgs>): Prisma.PrismaPromise<GetTestimonialAggregateType<T>>

    /**
     * Group by Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestimonialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestimonialGroupByArgs['orderBy'] }
        : { orderBy?: TestimonialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Testimonial model
   */
  readonly fields: TestimonialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Testimonial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestimonialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Testimonial model
   */ 
  interface TestimonialFieldRefs {
    readonly id: FieldRef<"Testimonial", 'Int'>
    readonly name: FieldRef<"Testimonial", 'String'>
    readonly content: FieldRef<"Testimonial", 'String'>
    readonly rating: FieldRef<"Testimonial", 'Int'>
    readonly imageUrl: FieldRef<"Testimonial", 'String'>
    readonly displayOrder: FieldRef<"Testimonial", 'Int'>
    readonly isActive: FieldRef<"Testimonial", 'Boolean'>
    readonly createdAt: FieldRef<"Testimonial", 'DateTime'>
    readonly updatedAt: FieldRef<"Testimonial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Testimonial findUnique
   */
  export type TestimonialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findUniqueOrThrow
   */
  export type TestimonialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findFirst
   */
  export type TestimonialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial findFirstOrThrow
   */
  export type TestimonialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial findMany
   */
  export type TestimonialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial create
   */
  export type TestimonialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * The data needed to create a Testimonial.
     */
    data: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
  }

  /**
   * Testimonial createMany
   */
  export type TestimonialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialCreateManyInput | TestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonial createManyAndReturn
   */
  export type TestimonialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialCreateManyInput | TestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonial update
   */
  export type TestimonialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * The data needed to update a Testimonial.
     */
    data: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
    /**
     * Choose, which Testimonial to update.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial updateMany
   */
  export type TestimonialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialWhereInput
  }

  /**
   * Testimonial upsert
   */
  export type TestimonialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * The filter to search for the Testimonial to update in case it exists.
     */
    where: TestimonialWhereUniqueInput
    /**
     * In case the Testimonial found by the `where` argument doesn't exist, create a new Testimonial with this data.
     */
    create: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
    /**
     * In case the Testimonial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
  }

  /**
   * Testimonial delete
   */
  export type TestimonialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Filter which Testimonial to delete.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial deleteMany
   */
  export type TestimonialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to delete
     */
    where?: TestimonialWhereInput
  }

  /**
   * Testimonial without action
   */
  export type TestimonialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
  }


  /**
   * Model Promotion
   */

  export type AggregatePromotion = {
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  export type PromotionAvgAggregateOutputType = {
    id: number | null
  }

  export type PromotionSumAggregateOutputType = {
    id: number | null
  }

  export type PromotionMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    imageUrl: string | null
    buttonText: string | null
    buttonUrl: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    imageUrl: string | null
    buttonText: string | null
    buttonUrl: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    buttonText: number
    buttonUrl: number
    startDate: number
    endDate: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromotionAvgAggregateInputType = {
    id?: true
  }

  export type PromotionSumAggregateInputType = {
    id?: true
  }

  export type PromotionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    buttonText?: true
    buttonUrl?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    buttonText?: true
    buttonUrl?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    buttonText?: true
    buttonUrl?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotion to aggregate.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotions
    **/
    _count?: true | PromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionMaxAggregateInputType
  }

  export type GetPromotionAggregateType<T extends PromotionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotion[P]>
      : GetScalarType<T[P], AggregatePromotion[P]>
  }




  export type PromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithAggregationInput | PromotionOrderByWithAggregationInput[]
    by: PromotionScalarFieldEnum[] | PromotionScalarFieldEnum
    having?: PromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCountAggregateInputType | true
    _avg?: PromotionAvgAggregateInputType
    _sum?: PromotionSumAggregateInputType
    _min?: PromotionMinAggregateInputType
    _max?: PromotionMaxAggregateInputType
  }

  export type PromotionGroupByOutputType = {
    id: number
    title: string
    description: string
    imageUrl: string | null
    buttonText: string | null
    buttonUrl: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  type GetPromotionGroupByPayload<T extends PromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionGroupByOutputType[P]>
        }
      >
    >


  export type PromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    buttonText?: boolean
    buttonUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    buttonText?: boolean
    buttonUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    buttonText?: boolean
    buttonUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      imageUrl: string | null
      buttonText: string | null
      buttonUrl: string | null
      startDate: Date | null
      endDate: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promotion"]>
    composites: {}
  }

  type PromotionGetPayload<S extends boolean | null | undefined | PromotionDefaultArgs> = $Result.GetResult<Prisma.$PromotionPayload, S>

  type PromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromotionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromotionCountAggregateInputType | true
    }

  export interface PromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotion'], meta: { name: 'Promotion' } }
    /**
     * Find zero or one Promotion that matches the filter.
     * @param {PromotionFindUniqueArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotionFindUniqueArgs>(args: SelectSubset<T, PromotionFindUniqueArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Promotion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PromotionFindUniqueOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Promotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotionFindFirstArgs>(args?: SelectSubset<T, PromotionFindFirstArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Promotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotion.findMany()
     * 
     * // Get first 10 Promotions
     * const promotions = await prisma.promotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotionWithIdOnly = await prisma.promotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromotionFindManyArgs>(args?: SelectSubset<T, PromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Promotion.
     * @param {PromotionCreateArgs} args - Arguments to create a Promotion.
     * @example
     * // Create one Promotion
     * const Promotion = await prisma.promotion.create({
     *   data: {
     *     // ... data to create a Promotion
     *   }
     * })
     * 
     */
    create<T extends PromotionCreateArgs>(args: SelectSubset<T, PromotionCreateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Promotions.
     * @param {PromotionCreateManyArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotionCreateManyArgs>(args?: SelectSubset<T, PromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promotions and returns the data saved in the database.
     * @param {PromotionCreateManyAndReturnArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promotions and only return the `id`
     * const promotionWithIdOnly = await prisma.promotion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromotionCreateManyAndReturnArgs>(args?: SelectSubset<T, PromotionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Promotion.
     * @param {PromotionDeleteArgs} args - Arguments to delete one Promotion.
     * @example
     * // Delete one Promotion
     * const Promotion = await prisma.promotion.delete({
     *   where: {
     *     // ... filter to delete one Promotion
     *   }
     * })
     * 
     */
    delete<T extends PromotionDeleteArgs>(args: SelectSubset<T, PromotionDeleteArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Promotion.
     * @param {PromotionUpdateArgs} args - Arguments to update one Promotion.
     * @example
     * // Update one Promotion
     * const promotion = await prisma.promotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotionUpdateArgs>(args: SelectSubset<T, PromotionUpdateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Promotions.
     * @param {PromotionDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotionDeleteManyArgs>(args?: SelectSubset<T, PromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotionUpdateManyArgs>(args: SelectSubset<T, PromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promotion.
     * @param {PromotionUpsertArgs} args - Arguments to update or create a Promotion.
     * @example
     * // Update or create a Promotion
     * const promotion = await prisma.promotion.upsert({
     *   create: {
     *     // ... data to create a Promotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotion we want to update
     *   }
     * })
     */
    upsert<T extends PromotionUpsertArgs>(args: SelectSubset<T, PromotionUpsertArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotion.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
    **/
    count<T extends PromotionCountArgs>(
      args?: Subset<T, PromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotionAggregateArgs>(args: Subset<T, PromotionAggregateArgs>): Prisma.PrismaPromise<GetPromotionAggregateType<T>>

    /**
     * Group by Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionGroupByArgs['orderBy'] }
        : { orderBy?: PromotionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotion model
   */
  readonly fields: PromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promotion model
   */ 
  interface PromotionFieldRefs {
    readonly id: FieldRef<"Promotion", 'Int'>
    readonly title: FieldRef<"Promotion", 'String'>
    readonly description: FieldRef<"Promotion", 'String'>
    readonly imageUrl: FieldRef<"Promotion", 'String'>
    readonly buttonText: FieldRef<"Promotion", 'String'>
    readonly buttonUrl: FieldRef<"Promotion", 'String'>
    readonly startDate: FieldRef<"Promotion", 'DateTime'>
    readonly endDate: FieldRef<"Promotion", 'DateTime'>
    readonly isActive: FieldRef<"Promotion", 'Boolean'>
    readonly createdAt: FieldRef<"Promotion", 'DateTime'>
    readonly updatedAt: FieldRef<"Promotion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promotion findUnique
   */
  export type PromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findUniqueOrThrow
   */
  export type PromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findFirst
   */
  export type PromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findFirstOrThrow
   */
  export type PromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findMany
   */
  export type PromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotions to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion create
   */
  export type PromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * The data needed to create a Promotion.
     */
    data: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
  }

  /**
   * Promotion createMany
   */
  export type PromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion createManyAndReturn
   */
  export type PromotionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion update
   */
  export type PromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * The data needed to update a Promotion.
     */
    data: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
    /**
     * Choose, which Promotion to update.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion updateMany
   */
  export type PromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
  }

  /**
   * Promotion upsert
   */
  export type PromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * The filter to search for the Promotion to update in case it exists.
     */
    where: PromotionWhereUniqueInput
    /**
     * In case the Promotion found by the `where` argument doesn't exist, create a new Promotion with this data.
     */
    create: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
    /**
     * In case the Promotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
  }

  /**
   * Promotion delete
   */
  export type PromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter which Promotion to delete.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion deleteMany
   */
  export type PromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotions to delete
     */
    where?: PromotionWhereInput
  }

  /**
   * Promotion without action
   */
  export type PromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
  }


  /**
   * Model NavigationItem
   */

  export type AggregateNavigationItem = {
    _count: NavigationItemCountAggregateOutputType | null
    _avg: NavigationItemAvgAggregateOutputType | null
    _sum: NavigationItemSumAggregateOutputType | null
    _min: NavigationItemMinAggregateOutputType | null
    _max: NavigationItemMaxAggregateOutputType | null
  }

  export type NavigationItemAvgAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type NavigationItemSumAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type NavigationItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NavigationItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NavigationItemCountAggregateOutputType = {
    id: number
    name: number
    url: number
    displayOrder: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NavigationItemAvgAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type NavigationItemSumAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type NavigationItemMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NavigationItemMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NavigationItemCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NavigationItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NavigationItem to aggregate.
     */
    where?: NavigationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavigationItems to fetch.
     */
    orderBy?: NavigationItemOrderByWithRelationInput | NavigationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NavigationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavigationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavigationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NavigationItems
    **/
    _count?: true | NavigationItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NavigationItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NavigationItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NavigationItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NavigationItemMaxAggregateInputType
  }

  export type GetNavigationItemAggregateType<T extends NavigationItemAggregateArgs> = {
        [P in keyof T & keyof AggregateNavigationItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNavigationItem[P]>
      : GetScalarType<T[P], AggregateNavigationItem[P]>
  }




  export type NavigationItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NavigationItemWhereInput
    orderBy?: NavigationItemOrderByWithAggregationInput | NavigationItemOrderByWithAggregationInput[]
    by: NavigationItemScalarFieldEnum[] | NavigationItemScalarFieldEnum
    having?: NavigationItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NavigationItemCountAggregateInputType | true
    _avg?: NavigationItemAvgAggregateInputType
    _sum?: NavigationItemSumAggregateInputType
    _min?: NavigationItemMinAggregateInputType
    _max?: NavigationItemMaxAggregateInputType
  }

  export type NavigationItemGroupByOutputType = {
    id: number
    name: string
    url: string
    displayOrder: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: NavigationItemCountAggregateOutputType | null
    _avg: NavigationItemAvgAggregateOutputType | null
    _sum: NavigationItemSumAggregateOutputType | null
    _min: NavigationItemMinAggregateOutputType | null
    _max: NavigationItemMaxAggregateOutputType | null
  }

  type GetNavigationItemGroupByPayload<T extends NavigationItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NavigationItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NavigationItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NavigationItemGroupByOutputType[P]>
            : GetScalarType<T[P], NavigationItemGroupByOutputType[P]>
        }
      >
    >


  export type NavigationItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["navigationItem"]>

  export type NavigationItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["navigationItem"]>

  export type NavigationItemSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $NavigationItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NavigationItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      url: string
      displayOrder: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["navigationItem"]>
    composites: {}
  }

  type NavigationItemGetPayload<S extends boolean | null | undefined | NavigationItemDefaultArgs> = $Result.GetResult<Prisma.$NavigationItemPayload, S>

  type NavigationItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NavigationItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NavigationItemCountAggregateInputType | true
    }

  export interface NavigationItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NavigationItem'], meta: { name: 'NavigationItem' } }
    /**
     * Find zero or one NavigationItem that matches the filter.
     * @param {NavigationItemFindUniqueArgs} args - Arguments to find a NavigationItem
     * @example
     * // Get one NavigationItem
     * const navigationItem = await prisma.navigationItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NavigationItemFindUniqueArgs>(args: SelectSubset<T, NavigationItemFindUniqueArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NavigationItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NavigationItemFindUniqueOrThrowArgs} args - Arguments to find a NavigationItem
     * @example
     * // Get one NavigationItem
     * const navigationItem = await prisma.navigationItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NavigationItemFindUniqueOrThrowArgs>(args: SelectSubset<T, NavigationItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NavigationItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemFindFirstArgs} args - Arguments to find a NavigationItem
     * @example
     * // Get one NavigationItem
     * const navigationItem = await prisma.navigationItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NavigationItemFindFirstArgs>(args?: SelectSubset<T, NavigationItemFindFirstArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NavigationItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemFindFirstOrThrowArgs} args - Arguments to find a NavigationItem
     * @example
     * // Get one NavigationItem
     * const navigationItem = await prisma.navigationItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NavigationItemFindFirstOrThrowArgs>(args?: SelectSubset<T, NavigationItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NavigationItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NavigationItems
     * const navigationItems = await prisma.navigationItem.findMany()
     * 
     * // Get first 10 NavigationItems
     * const navigationItems = await prisma.navigationItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const navigationItemWithIdOnly = await prisma.navigationItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NavigationItemFindManyArgs>(args?: SelectSubset<T, NavigationItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NavigationItem.
     * @param {NavigationItemCreateArgs} args - Arguments to create a NavigationItem.
     * @example
     * // Create one NavigationItem
     * const NavigationItem = await prisma.navigationItem.create({
     *   data: {
     *     // ... data to create a NavigationItem
     *   }
     * })
     * 
     */
    create<T extends NavigationItemCreateArgs>(args: SelectSubset<T, NavigationItemCreateArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NavigationItems.
     * @param {NavigationItemCreateManyArgs} args - Arguments to create many NavigationItems.
     * @example
     * // Create many NavigationItems
     * const navigationItem = await prisma.navigationItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NavigationItemCreateManyArgs>(args?: SelectSubset<T, NavigationItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NavigationItems and returns the data saved in the database.
     * @param {NavigationItemCreateManyAndReturnArgs} args - Arguments to create many NavigationItems.
     * @example
     * // Create many NavigationItems
     * const navigationItem = await prisma.navigationItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NavigationItems and only return the `id`
     * const navigationItemWithIdOnly = await prisma.navigationItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NavigationItemCreateManyAndReturnArgs>(args?: SelectSubset<T, NavigationItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NavigationItem.
     * @param {NavigationItemDeleteArgs} args - Arguments to delete one NavigationItem.
     * @example
     * // Delete one NavigationItem
     * const NavigationItem = await prisma.navigationItem.delete({
     *   where: {
     *     // ... filter to delete one NavigationItem
     *   }
     * })
     * 
     */
    delete<T extends NavigationItemDeleteArgs>(args: SelectSubset<T, NavigationItemDeleteArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NavigationItem.
     * @param {NavigationItemUpdateArgs} args - Arguments to update one NavigationItem.
     * @example
     * // Update one NavigationItem
     * const navigationItem = await prisma.navigationItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NavigationItemUpdateArgs>(args: SelectSubset<T, NavigationItemUpdateArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NavigationItems.
     * @param {NavigationItemDeleteManyArgs} args - Arguments to filter NavigationItems to delete.
     * @example
     * // Delete a few NavigationItems
     * const { count } = await prisma.navigationItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NavigationItemDeleteManyArgs>(args?: SelectSubset<T, NavigationItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NavigationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NavigationItems
     * const navigationItem = await prisma.navigationItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NavigationItemUpdateManyArgs>(args: SelectSubset<T, NavigationItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NavigationItem.
     * @param {NavigationItemUpsertArgs} args - Arguments to update or create a NavigationItem.
     * @example
     * // Update or create a NavigationItem
     * const navigationItem = await prisma.navigationItem.upsert({
     *   create: {
     *     // ... data to create a NavigationItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NavigationItem we want to update
     *   }
     * })
     */
    upsert<T extends NavigationItemUpsertArgs>(args: SelectSubset<T, NavigationItemUpsertArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NavigationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemCountArgs} args - Arguments to filter NavigationItems to count.
     * @example
     * // Count the number of NavigationItems
     * const count = await prisma.navigationItem.count({
     *   where: {
     *     // ... the filter for the NavigationItems we want to count
     *   }
     * })
    **/
    count<T extends NavigationItemCountArgs>(
      args?: Subset<T, NavigationItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NavigationItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NavigationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NavigationItemAggregateArgs>(args: Subset<T, NavigationItemAggregateArgs>): Prisma.PrismaPromise<GetNavigationItemAggregateType<T>>

    /**
     * Group by NavigationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NavigationItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NavigationItemGroupByArgs['orderBy'] }
        : { orderBy?: NavigationItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NavigationItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNavigationItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NavigationItem model
   */
  readonly fields: NavigationItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NavigationItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NavigationItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NavigationItem model
   */ 
  interface NavigationItemFieldRefs {
    readonly id: FieldRef<"NavigationItem", 'Int'>
    readonly name: FieldRef<"NavigationItem", 'String'>
    readonly url: FieldRef<"NavigationItem", 'String'>
    readonly displayOrder: FieldRef<"NavigationItem", 'Int'>
    readonly isActive: FieldRef<"NavigationItem", 'Boolean'>
    readonly createdAt: FieldRef<"NavigationItem", 'DateTime'>
    readonly updatedAt: FieldRef<"NavigationItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NavigationItem findUnique
   */
  export type NavigationItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Filter, which NavigationItem to fetch.
     */
    where: NavigationItemWhereUniqueInput
  }

  /**
   * NavigationItem findUniqueOrThrow
   */
  export type NavigationItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Filter, which NavigationItem to fetch.
     */
    where: NavigationItemWhereUniqueInput
  }

  /**
   * NavigationItem findFirst
   */
  export type NavigationItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Filter, which NavigationItem to fetch.
     */
    where?: NavigationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavigationItems to fetch.
     */
    orderBy?: NavigationItemOrderByWithRelationInput | NavigationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NavigationItems.
     */
    cursor?: NavigationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavigationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavigationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NavigationItems.
     */
    distinct?: NavigationItemScalarFieldEnum | NavigationItemScalarFieldEnum[]
  }

  /**
   * NavigationItem findFirstOrThrow
   */
  export type NavigationItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Filter, which NavigationItem to fetch.
     */
    where?: NavigationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavigationItems to fetch.
     */
    orderBy?: NavigationItemOrderByWithRelationInput | NavigationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NavigationItems.
     */
    cursor?: NavigationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavigationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavigationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NavigationItems.
     */
    distinct?: NavigationItemScalarFieldEnum | NavigationItemScalarFieldEnum[]
  }

  /**
   * NavigationItem findMany
   */
  export type NavigationItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Filter, which NavigationItems to fetch.
     */
    where?: NavigationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavigationItems to fetch.
     */
    orderBy?: NavigationItemOrderByWithRelationInput | NavigationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NavigationItems.
     */
    cursor?: NavigationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavigationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavigationItems.
     */
    skip?: number
    distinct?: NavigationItemScalarFieldEnum | NavigationItemScalarFieldEnum[]
  }

  /**
   * NavigationItem create
   */
  export type NavigationItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * The data needed to create a NavigationItem.
     */
    data: XOR<NavigationItemCreateInput, NavigationItemUncheckedCreateInput>
  }

  /**
   * NavigationItem createMany
   */
  export type NavigationItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NavigationItems.
     */
    data: NavigationItemCreateManyInput | NavigationItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NavigationItem createManyAndReturn
   */
  export type NavigationItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NavigationItems.
     */
    data: NavigationItemCreateManyInput | NavigationItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NavigationItem update
   */
  export type NavigationItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * The data needed to update a NavigationItem.
     */
    data: XOR<NavigationItemUpdateInput, NavigationItemUncheckedUpdateInput>
    /**
     * Choose, which NavigationItem to update.
     */
    where: NavigationItemWhereUniqueInput
  }

  /**
   * NavigationItem updateMany
   */
  export type NavigationItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NavigationItems.
     */
    data: XOR<NavigationItemUpdateManyMutationInput, NavigationItemUncheckedUpdateManyInput>
    /**
     * Filter which NavigationItems to update
     */
    where?: NavigationItemWhereInput
  }

  /**
   * NavigationItem upsert
   */
  export type NavigationItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * The filter to search for the NavigationItem to update in case it exists.
     */
    where: NavigationItemWhereUniqueInput
    /**
     * In case the NavigationItem found by the `where` argument doesn't exist, create a new NavigationItem with this data.
     */
    create: XOR<NavigationItemCreateInput, NavigationItemUncheckedCreateInput>
    /**
     * In case the NavigationItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NavigationItemUpdateInput, NavigationItemUncheckedUpdateInput>
  }

  /**
   * NavigationItem delete
   */
  export type NavigationItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Filter which NavigationItem to delete.
     */
    where: NavigationItemWhereUniqueInput
  }

  /**
   * NavigationItem deleteMany
   */
  export type NavigationItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NavigationItems to delete
     */
    where?: NavigationItemWhereInput
  }

  /**
   * NavigationItem without action
   */
  export type NavigationItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
  }


  /**
   * Model WhatsAppSettings
   */

  export type AggregateWhatsAppSettings = {
    _count: WhatsAppSettingsCountAggregateOutputType | null
    _avg: WhatsAppSettingsAvgAggregateOutputType | null
    _sum: WhatsAppSettingsSumAggregateOutputType | null
    _min: WhatsAppSettingsMinAggregateOutputType | null
    _max: WhatsAppSettingsMaxAggregateOutputType | null
  }

  export type WhatsAppSettingsAvgAggregateOutputType = {
    id: number | null
  }

  export type WhatsAppSettingsSumAggregateOutputType = {
    id: number | null
  }

  export type WhatsAppSettingsMinAggregateOutputType = {
    id: number | null
    whatsappNumber: string | null
    defaultMessage: string | null
    businessName: string | null
    orderMessageFormat: string | null
    updatedAt: Date | null
  }

  export type WhatsAppSettingsMaxAggregateOutputType = {
    id: number | null
    whatsappNumber: string | null
    defaultMessage: string | null
    businessName: string | null
    orderMessageFormat: string | null
    updatedAt: Date | null
  }

  export type WhatsAppSettingsCountAggregateOutputType = {
    id: number
    whatsappNumber: number
    defaultMessage: number
    businessName: number
    orderMessageFormat: number
    updatedAt: number
    _all: number
  }


  export type WhatsAppSettingsAvgAggregateInputType = {
    id?: true
  }

  export type WhatsAppSettingsSumAggregateInputType = {
    id?: true
  }

  export type WhatsAppSettingsMinAggregateInputType = {
    id?: true
    whatsappNumber?: true
    defaultMessage?: true
    businessName?: true
    orderMessageFormat?: true
    updatedAt?: true
  }

  export type WhatsAppSettingsMaxAggregateInputType = {
    id?: true
    whatsappNumber?: true
    defaultMessage?: true
    businessName?: true
    orderMessageFormat?: true
    updatedAt?: true
  }

  export type WhatsAppSettingsCountAggregateInputType = {
    id?: true
    whatsappNumber?: true
    defaultMessage?: true
    businessName?: true
    orderMessageFormat?: true
    updatedAt?: true
    _all?: true
  }

  export type WhatsAppSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppSettings to aggregate.
     */
    where?: WhatsAppSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppSettings to fetch.
     */
    orderBy?: WhatsAppSettingsOrderByWithRelationInput | WhatsAppSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsAppSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsAppSettings
    **/
    _count?: true | WhatsAppSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WhatsAppSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WhatsAppSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsAppSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsAppSettingsMaxAggregateInputType
  }

  export type GetWhatsAppSettingsAggregateType<T extends WhatsAppSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsAppSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsAppSettings[P]>
      : GetScalarType<T[P], AggregateWhatsAppSettings[P]>
  }




  export type WhatsAppSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppSettingsWhereInput
    orderBy?: WhatsAppSettingsOrderByWithAggregationInput | WhatsAppSettingsOrderByWithAggregationInput[]
    by: WhatsAppSettingsScalarFieldEnum[] | WhatsAppSettingsScalarFieldEnum
    having?: WhatsAppSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsAppSettingsCountAggregateInputType | true
    _avg?: WhatsAppSettingsAvgAggregateInputType
    _sum?: WhatsAppSettingsSumAggregateInputType
    _min?: WhatsAppSettingsMinAggregateInputType
    _max?: WhatsAppSettingsMaxAggregateInputType
  }

  export type WhatsAppSettingsGroupByOutputType = {
    id: number
    whatsappNumber: string
    defaultMessage: string
    businessName: string
    orderMessageFormat: string
    updatedAt: Date
    _count: WhatsAppSettingsCountAggregateOutputType | null
    _avg: WhatsAppSettingsAvgAggregateOutputType | null
    _sum: WhatsAppSettingsSumAggregateOutputType | null
    _min: WhatsAppSettingsMinAggregateOutputType | null
    _max: WhatsAppSettingsMaxAggregateOutputType | null
  }

  type GetWhatsAppSettingsGroupByPayload<T extends WhatsAppSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsAppSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsAppSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsAppSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsAppSettingsGroupByOutputType[P]>
        }
      >
    >


  export type WhatsAppSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whatsappNumber?: boolean
    defaultMessage?: boolean
    businessName?: boolean
    orderMessageFormat?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["whatsAppSettings"]>

  export type WhatsAppSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whatsappNumber?: boolean
    defaultMessage?: boolean
    businessName?: boolean
    orderMessageFormat?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["whatsAppSettings"]>

  export type WhatsAppSettingsSelectScalar = {
    id?: boolean
    whatsappNumber?: boolean
    defaultMessage?: boolean
    businessName?: boolean
    orderMessageFormat?: boolean
    updatedAt?: boolean
  }


  export type $WhatsAppSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsAppSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      whatsappNumber: string
      defaultMessage: string
      businessName: string
      orderMessageFormat: string
      updatedAt: Date
    }, ExtArgs["result"]["whatsAppSettings"]>
    composites: {}
  }

  type WhatsAppSettingsGetPayload<S extends boolean | null | undefined | WhatsAppSettingsDefaultArgs> = $Result.GetResult<Prisma.$WhatsAppSettingsPayload, S>

  type WhatsAppSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WhatsAppSettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WhatsAppSettingsCountAggregateInputType | true
    }

  export interface WhatsAppSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsAppSettings'], meta: { name: 'WhatsAppSettings' } }
    /**
     * Find zero or one WhatsAppSettings that matches the filter.
     * @param {WhatsAppSettingsFindUniqueArgs} args - Arguments to find a WhatsAppSettings
     * @example
     * // Get one WhatsAppSettings
     * const whatsAppSettings = await prisma.whatsAppSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsAppSettingsFindUniqueArgs>(args: SelectSubset<T, WhatsAppSettingsFindUniqueArgs<ExtArgs>>): Prisma__WhatsAppSettingsClient<$Result.GetResult<Prisma.$WhatsAppSettingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WhatsAppSettings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WhatsAppSettingsFindUniqueOrThrowArgs} args - Arguments to find a WhatsAppSettings
     * @example
     * // Get one WhatsAppSettings
     * const whatsAppSettings = await prisma.whatsAppSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsAppSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsAppSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsAppSettingsClient<$Result.GetResult<Prisma.$WhatsAppSettingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WhatsAppSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSettingsFindFirstArgs} args - Arguments to find a WhatsAppSettings
     * @example
     * // Get one WhatsAppSettings
     * const whatsAppSettings = await prisma.whatsAppSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsAppSettingsFindFirstArgs>(args?: SelectSubset<T, WhatsAppSettingsFindFirstArgs<ExtArgs>>): Prisma__WhatsAppSettingsClient<$Result.GetResult<Prisma.$WhatsAppSettingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WhatsAppSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSettingsFindFirstOrThrowArgs} args - Arguments to find a WhatsAppSettings
     * @example
     * // Get one WhatsAppSettings
     * const whatsAppSettings = await prisma.whatsAppSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsAppSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsAppSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsAppSettingsClient<$Result.GetResult<Prisma.$WhatsAppSettingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WhatsAppSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsAppSettings
     * const whatsAppSettings = await prisma.whatsAppSettings.findMany()
     * 
     * // Get first 10 WhatsAppSettings
     * const whatsAppSettings = await prisma.whatsAppSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsAppSettingsWithIdOnly = await prisma.whatsAppSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsAppSettingsFindManyArgs>(args?: SelectSubset<T, WhatsAppSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppSettingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WhatsAppSettings.
     * @param {WhatsAppSettingsCreateArgs} args - Arguments to create a WhatsAppSettings.
     * @example
     * // Create one WhatsAppSettings
     * const WhatsAppSettings = await prisma.whatsAppSettings.create({
     *   data: {
     *     // ... data to create a WhatsAppSettings
     *   }
     * })
     * 
     */
    create<T extends WhatsAppSettingsCreateArgs>(args: SelectSubset<T, WhatsAppSettingsCreateArgs<ExtArgs>>): Prisma__WhatsAppSettingsClient<$Result.GetResult<Prisma.$WhatsAppSettingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WhatsAppSettings.
     * @param {WhatsAppSettingsCreateManyArgs} args - Arguments to create many WhatsAppSettings.
     * @example
     * // Create many WhatsAppSettings
     * const whatsAppSettings = await prisma.whatsAppSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsAppSettingsCreateManyArgs>(args?: SelectSubset<T, WhatsAppSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhatsAppSettings and returns the data saved in the database.
     * @param {WhatsAppSettingsCreateManyAndReturnArgs} args - Arguments to create many WhatsAppSettings.
     * @example
     * // Create many WhatsAppSettings
     * const whatsAppSettings = await prisma.whatsAppSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhatsAppSettings and only return the `id`
     * const whatsAppSettingsWithIdOnly = await prisma.whatsAppSettings.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhatsAppSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, WhatsAppSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppSettingsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WhatsAppSettings.
     * @param {WhatsAppSettingsDeleteArgs} args - Arguments to delete one WhatsAppSettings.
     * @example
     * // Delete one WhatsAppSettings
     * const WhatsAppSettings = await prisma.whatsAppSettings.delete({
     *   where: {
     *     // ... filter to delete one WhatsAppSettings
     *   }
     * })
     * 
     */
    delete<T extends WhatsAppSettingsDeleteArgs>(args: SelectSubset<T, WhatsAppSettingsDeleteArgs<ExtArgs>>): Prisma__WhatsAppSettingsClient<$Result.GetResult<Prisma.$WhatsAppSettingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WhatsAppSettings.
     * @param {WhatsAppSettingsUpdateArgs} args - Arguments to update one WhatsAppSettings.
     * @example
     * // Update one WhatsAppSettings
     * const whatsAppSettings = await prisma.whatsAppSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsAppSettingsUpdateArgs>(args: SelectSubset<T, WhatsAppSettingsUpdateArgs<ExtArgs>>): Prisma__WhatsAppSettingsClient<$Result.GetResult<Prisma.$WhatsAppSettingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WhatsAppSettings.
     * @param {WhatsAppSettingsDeleteManyArgs} args - Arguments to filter WhatsAppSettings to delete.
     * @example
     * // Delete a few WhatsAppSettings
     * const { count } = await prisma.whatsAppSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsAppSettingsDeleteManyArgs>(args?: SelectSubset<T, WhatsAppSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsAppSettings
     * const whatsAppSettings = await prisma.whatsAppSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsAppSettingsUpdateManyArgs>(args: SelectSubset<T, WhatsAppSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WhatsAppSettings.
     * @param {WhatsAppSettingsUpsertArgs} args - Arguments to update or create a WhatsAppSettings.
     * @example
     * // Update or create a WhatsAppSettings
     * const whatsAppSettings = await prisma.whatsAppSettings.upsert({
     *   create: {
     *     // ... data to create a WhatsAppSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsAppSettings we want to update
     *   }
     * })
     */
    upsert<T extends WhatsAppSettingsUpsertArgs>(args: SelectSubset<T, WhatsAppSettingsUpsertArgs<ExtArgs>>): Prisma__WhatsAppSettingsClient<$Result.GetResult<Prisma.$WhatsAppSettingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WhatsAppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSettingsCountArgs} args - Arguments to filter WhatsAppSettings to count.
     * @example
     * // Count the number of WhatsAppSettings
     * const count = await prisma.whatsAppSettings.count({
     *   where: {
     *     // ... the filter for the WhatsAppSettings we want to count
     *   }
     * })
    **/
    count<T extends WhatsAppSettingsCountArgs>(
      args?: Subset<T, WhatsAppSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsAppSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsAppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhatsAppSettingsAggregateArgs>(args: Subset<T, WhatsAppSettingsAggregateArgs>): Prisma.PrismaPromise<GetWhatsAppSettingsAggregateType<T>>

    /**
     * Group by WhatsAppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhatsAppSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsAppSettingsGroupByArgs['orderBy'] }
        : { orderBy?: WhatsAppSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhatsAppSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsAppSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsAppSettings model
   */
  readonly fields: WhatsAppSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsAppSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsAppSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WhatsAppSettings model
   */ 
  interface WhatsAppSettingsFieldRefs {
    readonly id: FieldRef<"WhatsAppSettings", 'Int'>
    readonly whatsappNumber: FieldRef<"WhatsAppSettings", 'String'>
    readonly defaultMessage: FieldRef<"WhatsAppSettings", 'String'>
    readonly businessName: FieldRef<"WhatsAppSettings", 'String'>
    readonly orderMessageFormat: FieldRef<"WhatsAppSettings", 'String'>
    readonly updatedAt: FieldRef<"WhatsAppSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WhatsAppSettings findUnique
   */
  export type WhatsAppSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSettings
     */
    select?: WhatsAppSettingsSelect<ExtArgs> | null
    /**
     * Filter, which WhatsAppSettings to fetch.
     */
    where: WhatsAppSettingsWhereUniqueInput
  }

  /**
   * WhatsAppSettings findUniqueOrThrow
   */
  export type WhatsAppSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSettings
     */
    select?: WhatsAppSettingsSelect<ExtArgs> | null
    /**
     * Filter, which WhatsAppSettings to fetch.
     */
    where: WhatsAppSettingsWhereUniqueInput
  }

  /**
   * WhatsAppSettings findFirst
   */
  export type WhatsAppSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSettings
     */
    select?: WhatsAppSettingsSelect<ExtArgs> | null
    /**
     * Filter, which WhatsAppSettings to fetch.
     */
    where?: WhatsAppSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppSettings to fetch.
     */
    orderBy?: WhatsAppSettingsOrderByWithRelationInput | WhatsAppSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppSettings.
     */
    cursor?: WhatsAppSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppSettings.
     */
    distinct?: WhatsAppSettingsScalarFieldEnum | WhatsAppSettingsScalarFieldEnum[]
  }

  /**
   * WhatsAppSettings findFirstOrThrow
   */
  export type WhatsAppSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSettings
     */
    select?: WhatsAppSettingsSelect<ExtArgs> | null
    /**
     * Filter, which WhatsAppSettings to fetch.
     */
    where?: WhatsAppSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppSettings to fetch.
     */
    orderBy?: WhatsAppSettingsOrderByWithRelationInput | WhatsAppSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppSettings.
     */
    cursor?: WhatsAppSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppSettings.
     */
    distinct?: WhatsAppSettingsScalarFieldEnum | WhatsAppSettingsScalarFieldEnum[]
  }

  /**
   * WhatsAppSettings findMany
   */
  export type WhatsAppSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSettings
     */
    select?: WhatsAppSettingsSelect<ExtArgs> | null
    /**
     * Filter, which WhatsAppSettings to fetch.
     */
    where?: WhatsAppSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppSettings to fetch.
     */
    orderBy?: WhatsAppSettingsOrderByWithRelationInput | WhatsAppSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsAppSettings.
     */
    cursor?: WhatsAppSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppSettings.
     */
    skip?: number
    distinct?: WhatsAppSettingsScalarFieldEnum | WhatsAppSettingsScalarFieldEnum[]
  }

  /**
   * WhatsAppSettings create
   */
  export type WhatsAppSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSettings
     */
    select?: WhatsAppSettingsSelect<ExtArgs> | null
    /**
     * The data needed to create a WhatsAppSettings.
     */
    data: XOR<WhatsAppSettingsCreateInput, WhatsAppSettingsUncheckedCreateInput>
  }

  /**
   * WhatsAppSettings createMany
   */
  export type WhatsAppSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsAppSettings.
     */
    data: WhatsAppSettingsCreateManyInput | WhatsAppSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsAppSettings createManyAndReturn
   */
  export type WhatsAppSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSettings
     */
    select?: WhatsAppSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WhatsAppSettings.
     */
    data: WhatsAppSettingsCreateManyInput | WhatsAppSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsAppSettings update
   */
  export type WhatsAppSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSettings
     */
    select?: WhatsAppSettingsSelect<ExtArgs> | null
    /**
     * The data needed to update a WhatsAppSettings.
     */
    data: XOR<WhatsAppSettingsUpdateInput, WhatsAppSettingsUncheckedUpdateInput>
    /**
     * Choose, which WhatsAppSettings to update.
     */
    where: WhatsAppSettingsWhereUniqueInput
  }

  /**
   * WhatsAppSettings updateMany
   */
  export type WhatsAppSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsAppSettings.
     */
    data: XOR<WhatsAppSettingsUpdateManyMutationInput, WhatsAppSettingsUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppSettings to update
     */
    where?: WhatsAppSettingsWhereInput
  }

  /**
   * WhatsAppSettings upsert
   */
  export type WhatsAppSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSettings
     */
    select?: WhatsAppSettingsSelect<ExtArgs> | null
    /**
     * The filter to search for the WhatsAppSettings to update in case it exists.
     */
    where: WhatsAppSettingsWhereUniqueInput
    /**
     * In case the WhatsAppSettings found by the `where` argument doesn't exist, create a new WhatsAppSettings with this data.
     */
    create: XOR<WhatsAppSettingsCreateInput, WhatsAppSettingsUncheckedCreateInput>
    /**
     * In case the WhatsAppSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsAppSettingsUpdateInput, WhatsAppSettingsUncheckedUpdateInput>
  }

  /**
   * WhatsAppSettings delete
   */
  export type WhatsAppSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSettings
     */
    select?: WhatsAppSettingsSelect<ExtArgs> | null
    /**
     * Filter which WhatsAppSettings to delete.
     */
    where: WhatsAppSettingsWhereUniqueInput
  }

  /**
   * WhatsAppSettings deleteMany
   */
  export type WhatsAppSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppSettings to delete
     */
    where?: WhatsAppSettingsWhereInput
  }

  /**
   * WhatsAppSettings without action
   */
  export type WhatsAppSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSettings
     */
    select?: WhatsAppSettingsSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SiteSettingsScalarFieldEnum: {
    id: 'id',
    businessName: 'businessName',
    logoUrl: 'logoUrl',
    faviconUrl: 'faviconUrl',
    heroTitle: 'heroTitle',
    heroSubtitle: 'heroSubtitle',
    heroImageUrl: 'heroImageUrl',
    heroButtonText: 'heroButtonText',
    heroButtonLink: 'heroButtonLink',
    heroVisible: 'heroVisible',
    aboutIntro: 'aboutIntro',
    footerText: 'footerText',
    updatedAt: 'updatedAt'
  };

  export type SiteSettingsScalarFieldEnum = (typeof SiteSettingsScalarFieldEnum)[keyof typeof SiteSettingsScalarFieldEnum]


  export const ContactDetailsScalarFieldEnum: {
    id: 'id',
    businessName: 'businessName',
    address: 'address',
    phone: 'phone',
    whatsapp: 'whatsapp',
    email: 'email',
    googleMapsLink: 'googleMapsLink',
    openingHours: 'openingHours',
    instagramUrl: 'instagramUrl',
    facebookUrl: 'facebookUrl',
    twitterUrl: 'twitterUrl',
    updatedAt: 'updatedAt'
  };

  export type ContactDetailsScalarFieldEnum = (typeof ContactDetailsScalarFieldEnum)[keyof typeof ContactDetailsScalarFieldEnum]


  export const AboutContentScalarFieldEnum: {
    id: 'id',
    heading: 'heading',
    aboutIntro: 'aboutIntro',
    ourStory: 'ourStory',
    storyImageUrl: 'storyImageUrl',
    mission: 'mission',
    vision: 'vision',
    philosophyIntro: 'philosophyIntro',
    qualityIntro: 'qualityIntro',
    whyChooseUsIntro: 'whyChooseUsIntro',
    valuesIntro: 'valuesIntro',
    galleryTitle: 'galleryTitle',
    galleryIntro: 'galleryIntro',
    certificationsTitle: 'certificationsTitle',
    certificationsIntro: 'certificationsIntro',
    certificationsEnabled: 'certificationsEnabled',
    ctaTitle: 'ctaTitle',
    ctaButtonText: 'ctaButtonText',
    ctaButtonLink: 'ctaButtonLink',
    ctaWhatsAppText: 'ctaWhatsAppText',
    isEnabled: 'isEnabled',
    updatedAt: 'updatedAt',
    philosophy: 'philosophy',
    qualityInfo: 'qualityInfo',
    whyChooseUs: 'whyChooseUs',
    additionalContent: 'additionalContent',
    imageUrl: 'imageUrl'
  };

  export type AboutContentScalarFieldEnum = (typeof AboutContentScalarFieldEnum)[keyof typeof AboutContentScalarFieldEnum]


  export const AboutSectionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    isEnabled: 'isEnabled',
    displayOrder: 'displayOrder'
  };

  export type AboutSectionScalarFieldEnum = (typeof AboutSectionScalarFieldEnum)[keyof typeof AboutSectionScalarFieldEnum]


  export const AboutPhilosophyItemScalarFieldEnum: {
    id: 'id',
    icon: 'icon',
    title: 'title',
    description: 'description',
    displayOrder: 'displayOrder',
    isEnabled: 'isEnabled'
  };

  export type AboutPhilosophyItemScalarFieldEnum = (typeof AboutPhilosophyItemScalarFieldEnum)[keyof typeof AboutPhilosophyItemScalarFieldEnum]


  export const AboutQualityItemScalarFieldEnum: {
    id: 'id',
    icon: 'icon',
    title: 'title',
    description: 'description',
    displayOrder: 'displayOrder',
    isEnabled: 'isEnabled'
  };

  export type AboutQualityItemScalarFieldEnum = (typeof AboutQualityItemScalarFieldEnum)[keyof typeof AboutQualityItemScalarFieldEnum]


  export const AboutWhyChooseUsItemScalarFieldEnum: {
    id: 'id',
    icon: 'icon',
    title: 'title',
    description: 'description',
    displayOrder: 'displayOrder',
    isEnabled: 'isEnabled'
  };

  export type AboutWhyChooseUsItemScalarFieldEnum = (typeof AboutWhyChooseUsItemScalarFieldEnum)[keyof typeof AboutWhyChooseUsItemScalarFieldEnum]


  export const AboutValueItemScalarFieldEnum: {
    id: 'id',
    icon: 'icon',
    title: 'title',
    description: 'description',
    displayOrder: 'displayOrder',
    isEnabled: 'isEnabled'
  };

  export type AboutValueItemScalarFieldEnum = (typeof AboutValueItemScalarFieldEnum)[keyof typeof AboutValueItemScalarFieldEnum]


  export const AboutGalleryImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    title: 'title',
    description: 'description',
    displayOrder: 'displayOrder',
    isEnabled: 'isEnabled'
  };

  export type AboutGalleryImageScalarFieldEnum = (typeof AboutGalleryImageScalarFieldEnum)[keyof typeof AboutGalleryImageScalarFieldEnum]


  export const AboutCertificationScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    title: 'title',
    description: 'description',
    issuer: 'issuer',
    displayOrder: 'displayOrder',
    isEnabled: 'isEnabled'
  };

  export type AboutCertificationScalarFieldEnum = (typeof AboutCertificationScalarFieldEnum)[keyof typeof AboutCertificationScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    teluguName: 'teluguName',
    englishName: 'englishName',
    teluguSubtitle: 'teluguSubtitle',
    englishSubtitle: 'englishSubtitle',
    description: 'description',
    imageUrl: 'imageUrl',
    displayOrder: 'displayOrder',
    isEnabled: 'isEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const MedicineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    teluguName: 'teluguName',
    englishName: 'englishName',
    slug: 'slug',
    description: 'description',
    shortDescription: 'shortDescription',
    price: 'price',
    discountPrice: 'discountPrice',
    quantity: 'quantity',
    imageUrl: 'imageUrl',
    availability: 'availability',
    whatsappEnabled: 'whatsappEnabled',
    displayOrder: 'displayOrder',
    ingredients: 'ingredients',
    benefits: 'benefits',
    usageInstructions: 'usageInstructions',
    isFeatured: 'isFeatured',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicineScalarFieldEnum = (typeof MedicineScalarFieldEnum)[keyof typeof MedicineScalarFieldEnum]


  export const BenefitScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    displayOrder: 'displayOrder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BenefitScalarFieldEnum = (typeof BenefitScalarFieldEnum)[keyof typeof BenefitScalarFieldEnum]


  export const TestimonialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    content: 'content',
    rating: 'rating',
    imageUrl: 'imageUrl',
    displayOrder: 'displayOrder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestimonialScalarFieldEnum = (typeof TestimonialScalarFieldEnum)[keyof typeof TestimonialScalarFieldEnum]


  export const PromotionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    buttonText: 'buttonText',
    buttonUrl: 'buttonUrl',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromotionScalarFieldEnum = (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum]


  export const NavigationItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    displayOrder: 'displayOrder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NavigationItemScalarFieldEnum = (typeof NavigationItemScalarFieldEnum)[keyof typeof NavigationItemScalarFieldEnum]


  export const WhatsAppSettingsScalarFieldEnum: {
    id: 'id',
    whatsappNumber: 'whatsappNumber',
    defaultMessage: 'defaultMessage',
    businessName: 'businessName',
    orderMessageFormat: 'orderMessageFormat',
    updatedAt: 'updatedAt'
  };

  export type WhatsAppSettingsScalarFieldEnum = (typeof WhatsAppSettingsScalarFieldEnum)[keyof typeof WhatsAppSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    email?: StringFilter<"Admin"> | string
    passwordHash?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    passwordHash?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    email?: StringWithAggregatesFilter<"Admin"> | string
    passwordHash?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type SiteSettingsWhereInput = {
    AND?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    OR?: SiteSettingsWhereInput[]
    NOT?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    id?: IntFilter<"SiteSettings"> | number
    businessName?: StringFilter<"SiteSettings"> | string
    logoUrl?: StringNullableFilter<"SiteSettings"> | string | null
    faviconUrl?: StringNullableFilter<"SiteSettings"> | string | null
    heroTitle?: StringFilter<"SiteSettings"> | string
    heroSubtitle?: StringFilter<"SiteSettings"> | string
    heroImageUrl?: StringNullableFilter<"SiteSettings"> | string | null
    heroButtonText?: StringFilter<"SiteSettings"> | string
    heroButtonLink?: StringFilter<"SiteSettings"> | string
    heroVisible?: BoolFilter<"SiteSettings"> | boolean
    aboutIntro?: StringFilter<"SiteSettings"> | string
    footerText?: StringFilter<"SiteSettings"> | string
    updatedAt?: DateTimeFilter<"SiteSettings"> | Date | string
  }

  export type SiteSettingsOrderByWithRelationInput = {
    id?: SortOrder
    businessName?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    faviconUrl?: SortOrderInput | SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    heroImageUrl?: SortOrderInput | SortOrder
    heroButtonText?: SortOrder
    heroButtonLink?: SortOrder
    heroVisible?: SortOrder
    aboutIntro?: SortOrder
    footerText?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    OR?: SiteSettingsWhereInput[]
    NOT?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    businessName?: StringFilter<"SiteSettings"> | string
    logoUrl?: StringNullableFilter<"SiteSettings"> | string | null
    faviconUrl?: StringNullableFilter<"SiteSettings"> | string | null
    heroTitle?: StringFilter<"SiteSettings"> | string
    heroSubtitle?: StringFilter<"SiteSettings"> | string
    heroImageUrl?: StringNullableFilter<"SiteSettings"> | string | null
    heroButtonText?: StringFilter<"SiteSettings"> | string
    heroButtonLink?: StringFilter<"SiteSettings"> | string
    heroVisible?: BoolFilter<"SiteSettings"> | boolean
    aboutIntro?: StringFilter<"SiteSettings"> | string
    footerText?: StringFilter<"SiteSettings"> | string
    updatedAt?: DateTimeFilter<"SiteSettings"> | Date | string
  }, "id">

  export type SiteSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    businessName?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    faviconUrl?: SortOrderInput | SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    heroImageUrl?: SortOrderInput | SortOrder
    heroButtonText?: SortOrder
    heroButtonLink?: SortOrder
    heroVisible?: SortOrder
    aboutIntro?: SortOrder
    footerText?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteSettingsCountOrderByAggregateInput
    _avg?: SiteSettingsAvgOrderByAggregateInput
    _max?: SiteSettingsMaxOrderByAggregateInput
    _min?: SiteSettingsMinOrderByAggregateInput
    _sum?: SiteSettingsSumOrderByAggregateInput
  }

  export type SiteSettingsScalarWhereWithAggregatesInput = {
    AND?: SiteSettingsScalarWhereWithAggregatesInput | SiteSettingsScalarWhereWithAggregatesInput[]
    OR?: SiteSettingsScalarWhereWithAggregatesInput[]
    NOT?: SiteSettingsScalarWhereWithAggregatesInput | SiteSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SiteSettings"> | number
    businessName?: StringWithAggregatesFilter<"SiteSettings"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    faviconUrl?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    heroTitle?: StringWithAggregatesFilter<"SiteSettings"> | string
    heroSubtitle?: StringWithAggregatesFilter<"SiteSettings"> | string
    heroImageUrl?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    heroButtonText?: StringWithAggregatesFilter<"SiteSettings"> | string
    heroButtonLink?: StringWithAggregatesFilter<"SiteSettings"> | string
    heroVisible?: BoolWithAggregatesFilter<"SiteSettings"> | boolean
    aboutIntro?: StringWithAggregatesFilter<"SiteSettings"> | string
    footerText?: StringWithAggregatesFilter<"SiteSettings"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteSettings"> | Date | string
  }

  export type ContactDetailsWhereInput = {
    AND?: ContactDetailsWhereInput | ContactDetailsWhereInput[]
    OR?: ContactDetailsWhereInput[]
    NOT?: ContactDetailsWhereInput | ContactDetailsWhereInput[]
    id?: IntFilter<"ContactDetails"> | number
    businessName?: StringFilter<"ContactDetails"> | string
    address?: StringFilter<"ContactDetails"> | string
    phone?: StringFilter<"ContactDetails"> | string
    whatsapp?: StringFilter<"ContactDetails"> | string
    email?: StringFilter<"ContactDetails"> | string
    googleMapsLink?: StringFilter<"ContactDetails"> | string
    openingHours?: StringFilter<"ContactDetails"> | string
    instagramUrl?: StringNullableFilter<"ContactDetails"> | string | null
    facebookUrl?: StringNullableFilter<"ContactDetails"> | string | null
    twitterUrl?: StringNullableFilter<"ContactDetails"> | string | null
    updatedAt?: DateTimeFilter<"ContactDetails"> | Date | string
  }

  export type ContactDetailsOrderByWithRelationInput = {
    id?: SortOrder
    businessName?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    googleMapsLink?: SortOrder
    openingHours?: SortOrder
    instagramUrl?: SortOrderInput | SortOrder
    facebookUrl?: SortOrderInput | SortOrder
    twitterUrl?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type ContactDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactDetailsWhereInput | ContactDetailsWhereInput[]
    OR?: ContactDetailsWhereInput[]
    NOT?: ContactDetailsWhereInput | ContactDetailsWhereInput[]
    businessName?: StringFilter<"ContactDetails"> | string
    address?: StringFilter<"ContactDetails"> | string
    phone?: StringFilter<"ContactDetails"> | string
    whatsapp?: StringFilter<"ContactDetails"> | string
    email?: StringFilter<"ContactDetails"> | string
    googleMapsLink?: StringFilter<"ContactDetails"> | string
    openingHours?: StringFilter<"ContactDetails"> | string
    instagramUrl?: StringNullableFilter<"ContactDetails"> | string | null
    facebookUrl?: StringNullableFilter<"ContactDetails"> | string | null
    twitterUrl?: StringNullableFilter<"ContactDetails"> | string | null
    updatedAt?: DateTimeFilter<"ContactDetails"> | Date | string
  }, "id">

  export type ContactDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    businessName?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    googleMapsLink?: SortOrder
    openingHours?: SortOrder
    instagramUrl?: SortOrderInput | SortOrder
    facebookUrl?: SortOrderInput | SortOrder
    twitterUrl?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: ContactDetailsCountOrderByAggregateInput
    _avg?: ContactDetailsAvgOrderByAggregateInput
    _max?: ContactDetailsMaxOrderByAggregateInput
    _min?: ContactDetailsMinOrderByAggregateInput
    _sum?: ContactDetailsSumOrderByAggregateInput
  }

  export type ContactDetailsScalarWhereWithAggregatesInput = {
    AND?: ContactDetailsScalarWhereWithAggregatesInput | ContactDetailsScalarWhereWithAggregatesInput[]
    OR?: ContactDetailsScalarWhereWithAggregatesInput[]
    NOT?: ContactDetailsScalarWhereWithAggregatesInput | ContactDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactDetails"> | number
    businessName?: StringWithAggregatesFilter<"ContactDetails"> | string
    address?: StringWithAggregatesFilter<"ContactDetails"> | string
    phone?: StringWithAggregatesFilter<"ContactDetails"> | string
    whatsapp?: StringWithAggregatesFilter<"ContactDetails"> | string
    email?: StringWithAggregatesFilter<"ContactDetails"> | string
    googleMapsLink?: StringWithAggregatesFilter<"ContactDetails"> | string
    openingHours?: StringWithAggregatesFilter<"ContactDetails"> | string
    instagramUrl?: StringNullableWithAggregatesFilter<"ContactDetails"> | string | null
    facebookUrl?: StringNullableWithAggregatesFilter<"ContactDetails"> | string | null
    twitterUrl?: StringNullableWithAggregatesFilter<"ContactDetails"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"ContactDetails"> | Date | string
  }

  export type AboutContentWhereInput = {
    AND?: AboutContentWhereInput | AboutContentWhereInput[]
    OR?: AboutContentWhereInput[]
    NOT?: AboutContentWhereInput | AboutContentWhereInput[]
    id?: IntFilter<"AboutContent"> | number
    heading?: StringFilter<"AboutContent"> | string
    aboutIntro?: StringFilter<"AboutContent"> | string
    ourStory?: StringFilter<"AboutContent"> | string
    storyImageUrl?: StringNullableFilter<"AboutContent"> | string | null
    mission?: StringFilter<"AboutContent"> | string
    vision?: StringFilter<"AboutContent"> | string
    philosophyIntro?: StringFilter<"AboutContent"> | string
    qualityIntro?: StringFilter<"AboutContent"> | string
    whyChooseUsIntro?: StringFilter<"AboutContent"> | string
    valuesIntro?: StringFilter<"AboutContent"> | string
    galleryTitle?: StringFilter<"AboutContent"> | string
    galleryIntro?: StringFilter<"AboutContent"> | string
    certificationsTitle?: StringFilter<"AboutContent"> | string
    certificationsIntro?: StringFilter<"AboutContent"> | string
    certificationsEnabled?: BoolFilter<"AboutContent"> | boolean
    ctaTitle?: StringFilter<"AboutContent"> | string
    ctaButtonText?: StringFilter<"AboutContent"> | string
    ctaButtonLink?: StringFilter<"AboutContent"> | string
    ctaWhatsAppText?: StringFilter<"AboutContent"> | string
    isEnabled?: BoolFilter<"AboutContent"> | boolean
    updatedAt?: DateTimeFilter<"AboutContent"> | Date | string
    philosophy?: StringFilter<"AboutContent"> | string
    qualityInfo?: StringFilter<"AboutContent"> | string
    whyChooseUs?: StringFilter<"AboutContent"> | string
    additionalContent?: StringNullableFilter<"AboutContent"> | string | null
    imageUrl?: StringNullableFilter<"AboutContent"> | string | null
  }

  export type AboutContentOrderByWithRelationInput = {
    id?: SortOrder
    heading?: SortOrder
    aboutIntro?: SortOrder
    ourStory?: SortOrder
    storyImageUrl?: SortOrderInput | SortOrder
    mission?: SortOrder
    vision?: SortOrder
    philosophyIntro?: SortOrder
    qualityIntro?: SortOrder
    whyChooseUsIntro?: SortOrder
    valuesIntro?: SortOrder
    galleryTitle?: SortOrder
    galleryIntro?: SortOrder
    certificationsTitle?: SortOrder
    certificationsIntro?: SortOrder
    certificationsEnabled?: SortOrder
    ctaTitle?: SortOrder
    ctaButtonText?: SortOrder
    ctaButtonLink?: SortOrder
    ctaWhatsAppText?: SortOrder
    isEnabled?: SortOrder
    updatedAt?: SortOrder
    philosophy?: SortOrder
    qualityInfo?: SortOrder
    whyChooseUs?: SortOrder
    additionalContent?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
  }

  export type AboutContentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AboutContentWhereInput | AboutContentWhereInput[]
    OR?: AboutContentWhereInput[]
    NOT?: AboutContentWhereInput | AboutContentWhereInput[]
    heading?: StringFilter<"AboutContent"> | string
    aboutIntro?: StringFilter<"AboutContent"> | string
    ourStory?: StringFilter<"AboutContent"> | string
    storyImageUrl?: StringNullableFilter<"AboutContent"> | string | null
    mission?: StringFilter<"AboutContent"> | string
    vision?: StringFilter<"AboutContent"> | string
    philosophyIntro?: StringFilter<"AboutContent"> | string
    qualityIntro?: StringFilter<"AboutContent"> | string
    whyChooseUsIntro?: StringFilter<"AboutContent"> | string
    valuesIntro?: StringFilter<"AboutContent"> | string
    galleryTitle?: StringFilter<"AboutContent"> | string
    galleryIntro?: StringFilter<"AboutContent"> | string
    certificationsTitle?: StringFilter<"AboutContent"> | string
    certificationsIntro?: StringFilter<"AboutContent"> | string
    certificationsEnabled?: BoolFilter<"AboutContent"> | boolean
    ctaTitle?: StringFilter<"AboutContent"> | string
    ctaButtonText?: StringFilter<"AboutContent"> | string
    ctaButtonLink?: StringFilter<"AboutContent"> | string
    ctaWhatsAppText?: StringFilter<"AboutContent"> | string
    isEnabled?: BoolFilter<"AboutContent"> | boolean
    updatedAt?: DateTimeFilter<"AboutContent"> | Date | string
    philosophy?: StringFilter<"AboutContent"> | string
    qualityInfo?: StringFilter<"AboutContent"> | string
    whyChooseUs?: StringFilter<"AboutContent"> | string
    additionalContent?: StringNullableFilter<"AboutContent"> | string | null
    imageUrl?: StringNullableFilter<"AboutContent"> | string | null
  }, "id">

  export type AboutContentOrderByWithAggregationInput = {
    id?: SortOrder
    heading?: SortOrder
    aboutIntro?: SortOrder
    ourStory?: SortOrder
    storyImageUrl?: SortOrderInput | SortOrder
    mission?: SortOrder
    vision?: SortOrder
    philosophyIntro?: SortOrder
    qualityIntro?: SortOrder
    whyChooseUsIntro?: SortOrder
    valuesIntro?: SortOrder
    galleryTitle?: SortOrder
    galleryIntro?: SortOrder
    certificationsTitle?: SortOrder
    certificationsIntro?: SortOrder
    certificationsEnabled?: SortOrder
    ctaTitle?: SortOrder
    ctaButtonText?: SortOrder
    ctaButtonLink?: SortOrder
    ctaWhatsAppText?: SortOrder
    isEnabled?: SortOrder
    updatedAt?: SortOrder
    philosophy?: SortOrder
    qualityInfo?: SortOrder
    whyChooseUs?: SortOrder
    additionalContent?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: AboutContentCountOrderByAggregateInput
    _avg?: AboutContentAvgOrderByAggregateInput
    _max?: AboutContentMaxOrderByAggregateInput
    _min?: AboutContentMinOrderByAggregateInput
    _sum?: AboutContentSumOrderByAggregateInput
  }

  export type AboutContentScalarWhereWithAggregatesInput = {
    AND?: AboutContentScalarWhereWithAggregatesInput | AboutContentScalarWhereWithAggregatesInput[]
    OR?: AboutContentScalarWhereWithAggregatesInput[]
    NOT?: AboutContentScalarWhereWithAggregatesInput | AboutContentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AboutContent"> | number
    heading?: StringWithAggregatesFilter<"AboutContent"> | string
    aboutIntro?: StringWithAggregatesFilter<"AboutContent"> | string
    ourStory?: StringWithAggregatesFilter<"AboutContent"> | string
    storyImageUrl?: StringNullableWithAggregatesFilter<"AboutContent"> | string | null
    mission?: StringWithAggregatesFilter<"AboutContent"> | string
    vision?: StringWithAggregatesFilter<"AboutContent"> | string
    philosophyIntro?: StringWithAggregatesFilter<"AboutContent"> | string
    qualityIntro?: StringWithAggregatesFilter<"AboutContent"> | string
    whyChooseUsIntro?: StringWithAggregatesFilter<"AboutContent"> | string
    valuesIntro?: StringWithAggregatesFilter<"AboutContent"> | string
    galleryTitle?: StringWithAggregatesFilter<"AboutContent"> | string
    galleryIntro?: StringWithAggregatesFilter<"AboutContent"> | string
    certificationsTitle?: StringWithAggregatesFilter<"AboutContent"> | string
    certificationsIntro?: StringWithAggregatesFilter<"AboutContent"> | string
    certificationsEnabled?: BoolWithAggregatesFilter<"AboutContent"> | boolean
    ctaTitle?: StringWithAggregatesFilter<"AboutContent"> | string
    ctaButtonText?: StringWithAggregatesFilter<"AboutContent"> | string
    ctaButtonLink?: StringWithAggregatesFilter<"AboutContent"> | string
    ctaWhatsAppText?: StringWithAggregatesFilter<"AboutContent"> | string
    isEnabled?: BoolWithAggregatesFilter<"AboutContent"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"AboutContent"> | Date | string
    philosophy?: StringWithAggregatesFilter<"AboutContent"> | string
    qualityInfo?: StringWithAggregatesFilter<"AboutContent"> | string
    whyChooseUs?: StringWithAggregatesFilter<"AboutContent"> | string
    additionalContent?: StringNullableWithAggregatesFilter<"AboutContent"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"AboutContent"> | string | null
  }

  export type AboutSectionWhereInput = {
    AND?: AboutSectionWhereInput | AboutSectionWhereInput[]
    OR?: AboutSectionWhereInput[]
    NOT?: AboutSectionWhereInput | AboutSectionWhereInput[]
    id?: StringFilter<"AboutSection"> | string
    title?: StringFilter<"AboutSection"> | string
    isEnabled?: BoolFilter<"AboutSection"> | boolean
    displayOrder?: IntFilter<"AboutSection"> | number
  }

  export type AboutSectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    isEnabled?: SortOrder
    displayOrder?: SortOrder
  }

  export type AboutSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AboutSectionWhereInput | AboutSectionWhereInput[]
    OR?: AboutSectionWhereInput[]
    NOT?: AboutSectionWhereInput | AboutSectionWhereInput[]
    title?: StringFilter<"AboutSection"> | string
    isEnabled?: BoolFilter<"AboutSection"> | boolean
    displayOrder?: IntFilter<"AboutSection"> | number
  }, "id">

  export type AboutSectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    isEnabled?: SortOrder
    displayOrder?: SortOrder
    _count?: AboutSectionCountOrderByAggregateInput
    _avg?: AboutSectionAvgOrderByAggregateInput
    _max?: AboutSectionMaxOrderByAggregateInput
    _min?: AboutSectionMinOrderByAggregateInput
    _sum?: AboutSectionSumOrderByAggregateInput
  }

  export type AboutSectionScalarWhereWithAggregatesInput = {
    AND?: AboutSectionScalarWhereWithAggregatesInput | AboutSectionScalarWhereWithAggregatesInput[]
    OR?: AboutSectionScalarWhereWithAggregatesInput[]
    NOT?: AboutSectionScalarWhereWithAggregatesInput | AboutSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AboutSection"> | string
    title?: StringWithAggregatesFilter<"AboutSection"> | string
    isEnabled?: BoolWithAggregatesFilter<"AboutSection"> | boolean
    displayOrder?: IntWithAggregatesFilter<"AboutSection"> | number
  }

  export type AboutPhilosophyItemWhereInput = {
    AND?: AboutPhilosophyItemWhereInput | AboutPhilosophyItemWhereInput[]
    OR?: AboutPhilosophyItemWhereInput[]
    NOT?: AboutPhilosophyItemWhereInput | AboutPhilosophyItemWhereInput[]
    id?: IntFilter<"AboutPhilosophyItem"> | number
    icon?: StringFilter<"AboutPhilosophyItem"> | string
    title?: StringFilter<"AboutPhilosophyItem"> | string
    description?: StringFilter<"AboutPhilosophyItem"> | string
    displayOrder?: IntFilter<"AboutPhilosophyItem"> | number
    isEnabled?: BoolFilter<"AboutPhilosophyItem"> | boolean
  }

  export type AboutPhilosophyItemOrderByWithRelationInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutPhilosophyItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AboutPhilosophyItemWhereInput | AboutPhilosophyItemWhereInput[]
    OR?: AboutPhilosophyItemWhereInput[]
    NOT?: AboutPhilosophyItemWhereInput | AboutPhilosophyItemWhereInput[]
    icon?: StringFilter<"AboutPhilosophyItem"> | string
    title?: StringFilter<"AboutPhilosophyItem"> | string
    description?: StringFilter<"AboutPhilosophyItem"> | string
    displayOrder?: IntFilter<"AboutPhilosophyItem"> | number
    isEnabled?: BoolFilter<"AboutPhilosophyItem"> | boolean
  }, "id">

  export type AboutPhilosophyItemOrderByWithAggregationInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
    _count?: AboutPhilosophyItemCountOrderByAggregateInput
    _avg?: AboutPhilosophyItemAvgOrderByAggregateInput
    _max?: AboutPhilosophyItemMaxOrderByAggregateInput
    _min?: AboutPhilosophyItemMinOrderByAggregateInput
    _sum?: AboutPhilosophyItemSumOrderByAggregateInput
  }

  export type AboutPhilosophyItemScalarWhereWithAggregatesInput = {
    AND?: AboutPhilosophyItemScalarWhereWithAggregatesInput | AboutPhilosophyItemScalarWhereWithAggregatesInput[]
    OR?: AboutPhilosophyItemScalarWhereWithAggregatesInput[]
    NOT?: AboutPhilosophyItemScalarWhereWithAggregatesInput | AboutPhilosophyItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AboutPhilosophyItem"> | number
    icon?: StringWithAggregatesFilter<"AboutPhilosophyItem"> | string
    title?: StringWithAggregatesFilter<"AboutPhilosophyItem"> | string
    description?: StringWithAggregatesFilter<"AboutPhilosophyItem"> | string
    displayOrder?: IntWithAggregatesFilter<"AboutPhilosophyItem"> | number
    isEnabled?: BoolWithAggregatesFilter<"AboutPhilosophyItem"> | boolean
  }

  export type AboutQualityItemWhereInput = {
    AND?: AboutQualityItemWhereInput | AboutQualityItemWhereInput[]
    OR?: AboutQualityItemWhereInput[]
    NOT?: AboutQualityItemWhereInput | AboutQualityItemWhereInput[]
    id?: IntFilter<"AboutQualityItem"> | number
    icon?: StringFilter<"AboutQualityItem"> | string
    title?: StringFilter<"AboutQualityItem"> | string
    description?: StringFilter<"AboutQualityItem"> | string
    displayOrder?: IntFilter<"AboutQualityItem"> | number
    isEnabled?: BoolFilter<"AboutQualityItem"> | boolean
  }

  export type AboutQualityItemOrderByWithRelationInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutQualityItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AboutQualityItemWhereInput | AboutQualityItemWhereInput[]
    OR?: AboutQualityItemWhereInput[]
    NOT?: AboutQualityItemWhereInput | AboutQualityItemWhereInput[]
    icon?: StringFilter<"AboutQualityItem"> | string
    title?: StringFilter<"AboutQualityItem"> | string
    description?: StringFilter<"AboutQualityItem"> | string
    displayOrder?: IntFilter<"AboutQualityItem"> | number
    isEnabled?: BoolFilter<"AboutQualityItem"> | boolean
  }, "id">

  export type AboutQualityItemOrderByWithAggregationInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
    _count?: AboutQualityItemCountOrderByAggregateInput
    _avg?: AboutQualityItemAvgOrderByAggregateInput
    _max?: AboutQualityItemMaxOrderByAggregateInput
    _min?: AboutQualityItemMinOrderByAggregateInput
    _sum?: AboutQualityItemSumOrderByAggregateInput
  }

  export type AboutQualityItemScalarWhereWithAggregatesInput = {
    AND?: AboutQualityItemScalarWhereWithAggregatesInput | AboutQualityItemScalarWhereWithAggregatesInput[]
    OR?: AboutQualityItemScalarWhereWithAggregatesInput[]
    NOT?: AboutQualityItemScalarWhereWithAggregatesInput | AboutQualityItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AboutQualityItem"> | number
    icon?: StringWithAggregatesFilter<"AboutQualityItem"> | string
    title?: StringWithAggregatesFilter<"AboutQualityItem"> | string
    description?: StringWithAggregatesFilter<"AboutQualityItem"> | string
    displayOrder?: IntWithAggregatesFilter<"AboutQualityItem"> | number
    isEnabled?: BoolWithAggregatesFilter<"AboutQualityItem"> | boolean
  }

  export type AboutWhyChooseUsItemWhereInput = {
    AND?: AboutWhyChooseUsItemWhereInput | AboutWhyChooseUsItemWhereInput[]
    OR?: AboutWhyChooseUsItemWhereInput[]
    NOT?: AboutWhyChooseUsItemWhereInput | AboutWhyChooseUsItemWhereInput[]
    id?: IntFilter<"AboutWhyChooseUsItem"> | number
    icon?: StringNullableFilter<"AboutWhyChooseUsItem"> | string | null
    title?: StringFilter<"AboutWhyChooseUsItem"> | string
    description?: StringFilter<"AboutWhyChooseUsItem"> | string
    displayOrder?: IntFilter<"AboutWhyChooseUsItem"> | number
    isEnabled?: BoolFilter<"AboutWhyChooseUsItem"> | boolean
  }

  export type AboutWhyChooseUsItemOrderByWithRelationInput = {
    id?: SortOrder
    icon?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutWhyChooseUsItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AboutWhyChooseUsItemWhereInput | AboutWhyChooseUsItemWhereInput[]
    OR?: AboutWhyChooseUsItemWhereInput[]
    NOT?: AboutWhyChooseUsItemWhereInput | AboutWhyChooseUsItemWhereInput[]
    icon?: StringNullableFilter<"AboutWhyChooseUsItem"> | string | null
    title?: StringFilter<"AboutWhyChooseUsItem"> | string
    description?: StringFilter<"AboutWhyChooseUsItem"> | string
    displayOrder?: IntFilter<"AboutWhyChooseUsItem"> | number
    isEnabled?: BoolFilter<"AboutWhyChooseUsItem"> | boolean
  }, "id">

  export type AboutWhyChooseUsItemOrderByWithAggregationInput = {
    id?: SortOrder
    icon?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
    _count?: AboutWhyChooseUsItemCountOrderByAggregateInput
    _avg?: AboutWhyChooseUsItemAvgOrderByAggregateInput
    _max?: AboutWhyChooseUsItemMaxOrderByAggregateInput
    _min?: AboutWhyChooseUsItemMinOrderByAggregateInput
    _sum?: AboutWhyChooseUsItemSumOrderByAggregateInput
  }

  export type AboutWhyChooseUsItemScalarWhereWithAggregatesInput = {
    AND?: AboutWhyChooseUsItemScalarWhereWithAggregatesInput | AboutWhyChooseUsItemScalarWhereWithAggregatesInput[]
    OR?: AboutWhyChooseUsItemScalarWhereWithAggregatesInput[]
    NOT?: AboutWhyChooseUsItemScalarWhereWithAggregatesInput | AboutWhyChooseUsItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AboutWhyChooseUsItem"> | number
    icon?: StringNullableWithAggregatesFilter<"AboutWhyChooseUsItem"> | string | null
    title?: StringWithAggregatesFilter<"AboutWhyChooseUsItem"> | string
    description?: StringWithAggregatesFilter<"AboutWhyChooseUsItem"> | string
    displayOrder?: IntWithAggregatesFilter<"AboutWhyChooseUsItem"> | number
    isEnabled?: BoolWithAggregatesFilter<"AboutWhyChooseUsItem"> | boolean
  }

  export type AboutValueItemWhereInput = {
    AND?: AboutValueItemWhereInput | AboutValueItemWhereInput[]
    OR?: AboutValueItemWhereInput[]
    NOT?: AboutValueItemWhereInput | AboutValueItemWhereInput[]
    id?: IntFilter<"AboutValueItem"> | number
    icon?: StringFilter<"AboutValueItem"> | string
    title?: StringFilter<"AboutValueItem"> | string
    description?: StringFilter<"AboutValueItem"> | string
    displayOrder?: IntFilter<"AboutValueItem"> | number
    isEnabled?: BoolFilter<"AboutValueItem"> | boolean
  }

  export type AboutValueItemOrderByWithRelationInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutValueItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AboutValueItemWhereInput | AboutValueItemWhereInput[]
    OR?: AboutValueItemWhereInput[]
    NOT?: AboutValueItemWhereInput | AboutValueItemWhereInput[]
    icon?: StringFilter<"AboutValueItem"> | string
    title?: StringFilter<"AboutValueItem"> | string
    description?: StringFilter<"AboutValueItem"> | string
    displayOrder?: IntFilter<"AboutValueItem"> | number
    isEnabled?: BoolFilter<"AboutValueItem"> | boolean
  }, "id">

  export type AboutValueItemOrderByWithAggregationInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
    _count?: AboutValueItemCountOrderByAggregateInput
    _avg?: AboutValueItemAvgOrderByAggregateInput
    _max?: AboutValueItemMaxOrderByAggregateInput
    _min?: AboutValueItemMinOrderByAggregateInput
    _sum?: AboutValueItemSumOrderByAggregateInput
  }

  export type AboutValueItemScalarWhereWithAggregatesInput = {
    AND?: AboutValueItemScalarWhereWithAggregatesInput | AboutValueItemScalarWhereWithAggregatesInput[]
    OR?: AboutValueItemScalarWhereWithAggregatesInput[]
    NOT?: AboutValueItemScalarWhereWithAggregatesInput | AboutValueItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AboutValueItem"> | number
    icon?: StringWithAggregatesFilter<"AboutValueItem"> | string
    title?: StringWithAggregatesFilter<"AboutValueItem"> | string
    description?: StringWithAggregatesFilter<"AboutValueItem"> | string
    displayOrder?: IntWithAggregatesFilter<"AboutValueItem"> | number
    isEnabled?: BoolWithAggregatesFilter<"AboutValueItem"> | boolean
  }

  export type AboutGalleryImageWhereInput = {
    AND?: AboutGalleryImageWhereInput | AboutGalleryImageWhereInput[]
    OR?: AboutGalleryImageWhereInput[]
    NOT?: AboutGalleryImageWhereInput | AboutGalleryImageWhereInput[]
    id?: IntFilter<"AboutGalleryImage"> | number
    imageUrl?: StringFilter<"AboutGalleryImage"> | string
    title?: StringNullableFilter<"AboutGalleryImage"> | string | null
    description?: StringNullableFilter<"AboutGalleryImage"> | string | null
    displayOrder?: IntFilter<"AboutGalleryImage"> | number
    isEnabled?: BoolFilter<"AboutGalleryImage"> | boolean
  }

  export type AboutGalleryImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutGalleryImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AboutGalleryImageWhereInput | AboutGalleryImageWhereInput[]
    OR?: AboutGalleryImageWhereInput[]
    NOT?: AboutGalleryImageWhereInput | AboutGalleryImageWhereInput[]
    imageUrl?: StringFilter<"AboutGalleryImage"> | string
    title?: StringNullableFilter<"AboutGalleryImage"> | string | null
    description?: StringNullableFilter<"AboutGalleryImage"> | string | null
    displayOrder?: IntFilter<"AboutGalleryImage"> | number
    isEnabled?: BoolFilter<"AboutGalleryImage"> | boolean
  }, "id">

  export type AboutGalleryImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
    _count?: AboutGalleryImageCountOrderByAggregateInput
    _avg?: AboutGalleryImageAvgOrderByAggregateInput
    _max?: AboutGalleryImageMaxOrderByAggregateInput
    _min?: AboutGalleryImageMinOrderByAggregateInput
    _sum?: AboutGalleryImageSumOrderByAggregateInput
  }

  export type AboutGalleryImageScalarWhereWithAggregatesInput = {
    AND?: AboutGalleryImageScalarWhereWithAggregatesInput | AboutGalleryImageScalarWhereWithAggregatesInput[]
    OR?: AboutGalleryImageScalarWhereWithAggregatesInput[]
    NOT?: AboutGalleryImageScalarWhereWithAggregatesInput | AboutGalleryImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AboutGalleryImage"> | number
    imageUrl?: StringWithAggregatesFilter<"AboutGalleryImage"> | string
    title?: StringNullableWithAggregatesFilter<"AboutGalleryImage"> | string | null
    description?: StringNullableWithAggregatesFilter<"AboutGalleryImage"> | string | null
    displayOrder?: IntWithAggregatesFilter<"AboutGalleryImage"> | number
    isEnabled?: BoolWithAggregatesFilter<"AboutGalleryImage"> | boolean
  }

  export type AboutCertificationWhereInput = {
    AND?: AboutCertificationWhereInput | AboutCertificationWhereInput[]
    OR?: AboutCertificationWhereInput[]
    NOT?: AboutCertificationWhereInput | AboutCertificationWhereInput[]
    id?: IntFilter<"AboutCertification"> | number
    imageUrl?: StringNullableFilter<"AboutCertification"> | string | null
    title?: StringFilter<"AboutCertification"> | string
    description?: StringNullableFilter<"AboutCertification"> | string | null
    issuer?: StringNullableFilter<"AboutCertification"> | string | null
    displayOrder?: IntFilter<"AboutCertification"> | number
    isEnabled?: BoolFilter<"AboutCertification"> | boolean
  }

  export type AboutCertificationOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    issuer?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutCertificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AboutCertificationWhereInput | AboutCertificationWhereInput[]
    OR?: AboutCertificationWhereInput[]
    NOT?: AboutCertificationWhereInput | AboutCertificationWhereInput[]
    imageUrl?: StringNullableFilter<"AboutCertification"> | string | null
    title?: StringFilter<"AboutCertification"> | string
    description?: StringNullableFilter<"AboutCertification"> | string | null
    issuer?: StringNullableFilter<"AboutCertification"> | string | null
    displayOrder?: IntFilter<"AboutCertification"> | number
    isEnabled?: BoolFilter<"AboutCertification"> | boolean
  }, "id">

  export type AboutCertificationOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    issuer?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
    _count?: AboutCertificationCountOrderByAggregateInput
    _avg?: AboutCertificationAvgOrderByAggregateInput
    _max?: AboutCertificationMaxOrderByAggregateInput
    _min?: AboutCertificationMinOrderByAggregateInput
    _sum?: AboutCertificationSumOrderByAggregateInput
  }

  export type AboutCertificationScalarWhereWithAggregatesInput = {
    AND?: AboutCertificationScalarWhereWithAggregatesInput | AboutCertificationScalarWhereWithAggregatesInput[]
    OR?: AboutCertificationScalarWhereWithAggregatesInput[]
    NOT?: AboutCertificationScalarWhereWithAggregatesInput | AboutCertificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AboutCertification"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"AboutCertification"> | string | null
    title?: StringWithAggregatesFilter<"AboutCertification"> | string
    description?: StringNullableWithAggregatesFilter<"AboutCertification"> | string | null
    issuer?: StringNullableWithAggregatesFilter<"AboutCertification"> | string | null
    displayOrder?: IntWithAggregatesFilter<"AboutCertification"> | number
    isEnabled?: BoolWithAggregatesFilter<"AboutCertification"> | boolean
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    teluguName?: StringFilter<"Category"> | string
    englishName?: StringFilter<"Category"> | string
    teluguSubtitle?: StringNullableFilter<"Category"> | string | null
    englishSubtitle?: StringNullableFilter<"Category"> | string | null
    description?: StringNullableFilter<"Category"> | string | null
    imageUrl?: StringNullableFilter<"Category"> | string | null
    displayOrder?: IntFilter<"Category"> | number
    isEnabled?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    medicines?: MedicineListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    teluguName?: SortOrder
    englishName?: SortOrder
    teluguSubtitle?: SortOrderInput | SortOrder
    englishSubtitle?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medicines?: MedicineOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    englishName?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    teluguName?: StringFilter<"Category"> | string
    teluguSubtitle?: StringNullableFilter<"Category"> | string | null
    englishSubtitle?: StringNullableFilter<"Category"> | string | null
    description?: StringNullableFilter<"Category"> | string | null
    imageUrl?: StringNullableFilter<"Category"> | string | null
    displayOrder?: IntFilter<"Category"> | number
    isEnabled?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    medicines?: MedicineListRelationFilter
  }, "id" | "name" | "englishName">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    teluguName?: SortOrder
    englishName?: SortOrder
    teluguSubtitle?: SortOrderInput | SortOrder
    englishSubtitle?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    teluguName?: StringWithAggregatesFilter<"Category"> | string
    englishName?: StringWithAggregatesFilter<"Category"> | string
    teluguSubtitle?: StringNullableWithAggregatesFilter<"Category"> | string | null
    englishSubtitle?: StringNullableWithAggregatesFilter<"Category"> | string | null
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Category"> | string | null
    displayOrder?: IntWithAggregatesFilter<"Category"> | number
    isEnabled?: BoolWithAggregatesFilter<"Category"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type MedicineWhereInput = {
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    id?: IntFilter<"Medicine"> | number
    name?: StringFilter<"Medicine"> | string
    teluguName?: StringFilter<"Medicine"> | string
    englishName?: StringNullableFilter<"Medicine"> | string | null
    slug?: StringFilter<"Medicine"> | string
    description?: StringFilter<"Medicine"> | string
    shortDescription?: StringNullableFilter<"Medicine"> | string | null
    price?: FloatFilter<"Medicine"> | number
    discountPrice?: FloatNullableFilter<"Medicine"> | number | null
    quantity?: StringNullableFilter<"Medicine"> | string | null
    imageUrl?: StringNullableFilter<"Medicine"> | string | null
    availability?: StringFilter<"Medicine"> | string
    whatsappEnabled?: BoolFilter<"Medicine"> | boolean
    displayOrder?: IntFilter<"Medicine"> | number
    ingredients?: StringNullableFilter<"Medicine"> | string | null
    benefits?: StringNullableFilter<"Medicine"> | string | null
    usageInstructions?: StringNullableFilter<"Medicine"> | string | null
    isFeatured?: BoolFilter<"Medicine"> | boolean
    isActive?: BoolFilter<"Medicine"> | boolean
    createdAt?: DateTimeFilter<"Medicine"> | Date | string
    updatedAt?: DateTimeFilter<"Medicine"> | Date | string
    categories?: CategoryListRelationFilter
  }

  export type MedicineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    teluguName?: SortOrder
    englishName?: SortOrderInput | SortOrder
    slug?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrderInput | SortOrder
    price?: SortOrder
    discountPrice?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    availability?: SortOrder
    whatsappEnabled?: SortOrder
    displayOrder?: SortOrder
    ingredients?: SortOrderInput | SortOrder
    benefits?: SortOrderInput | SortOrder
    usageInstructions?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categories?: CategoryOrderByRelationAggregateInput
  }

  export type MedicineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    name?: StringFilter<"Medicine"> | string
    teluguName?: StringFilter<"Medicine"> | string
    englishName?: StringNullableFilter<"Medicine"> | string | null
    description?: StringFilter<"Medicine"> | string
    shortDescription?: StringNullableFilter<"Medicine"> | string | null
    price?: FloatFilter<"Medicine"> | number
    discountPrice?: FloatNullableFilter<"Medicine"> | number | null
    quantity?: StringNullableFilter<"Medicine"> | string | null
    imageUrl?: StringNullableFilter<"Medicine"> | string | null
    availability?: StringFilter<"Medicine"> | string
    whatsappEnabled?: BoolFilter<"Medicine"> | boolean
    displayOrder?: IntFilter<"Medicine"> | number
    ingredients?: StringNullableFilter<"Medicine"> | string | null
    benefits?: StringNullableFilter<"Medicine"> | string | null
    usageInstructions?: StringNullableFilter<"Medicine"> | string | null
    isFeatured?: BoolFilter<"Medicine"> | boolean
    isActive?: BoolFilter<"Medicine"> | boolean
    createdAt?: DateTimeFilter<"Medicine"> | Date | string
    updatedAt?: DateTimeFilter<"Medicine"> | Date | string
    categories?: CategoryListRelationFilter
  }, "id" | "slug">

  export type MedicineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    teluguName?: SortOrder
    englishName?: SortOrderInput | SortOrder
    slug?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrderInput | SortOrder
    price?: SortOrder
    discountPrice?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    availability?: SortOrder
    whatsappEnabled?: SortOrder
    displayOrder?: SortOrder
    ingredients?: SortOrderInput | SortOrder
    benefits?: SortOrderInput | SortOrder
    usageInstructions?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicineCountOrderByAggregateInput
    _avg?: MedicineAvgOrderByAggregateInput
    _max?: MedicineMaxOrderByAggregateInput
    _min?: MedicineMinOrderByAggregateInput
    _sum?: MedicineSumOrderByAggregateInput
  }

  export type MedicineScalarWhereWithAggregatesInput = {
    AND?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    OR?: MedicineScalarWhereWithAggregatesInput[]
    NOT?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Medicine"> | number
    name?: StringWithAggregatesFilter<"Medicine"> | string
    teluguName?: StringWithAggregatesFilter<"Medicine"> | string
    englishName?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    slug?: StringWithAggregatesFilter<"Medicine"> | string
    description?: StringWithAggregatesFilter<"Medicine"> | string
    shortDescription?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    price?: FloatWithAggregatesFilter<"Medicine"> | number
    discountPrice?: FloatNullableWithAggregatesFilter<"Medicine"> | number | null
    quantity?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    availability?: StringWithAggregatesFilter<"Medicine"> | string
    whatsappEnabled?: BoolWithAggregatesFilter<"Medicine"> | boolean
    displayOrder?: IntWithAggregatesFilter<"Medicine"> | number
    ingredients?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    benefits?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    usageInstructions?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    isFeatured?: BoolWithAggregatesFilter<"Medicine"> | boolean
    isActive?: BoolWithAggregatesFilter<"Medicine"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Medicine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Medicine"> | Date | string
  }

  export type BenefitWhereInput = {
    AND?: BenefitWhereInput | BenefitWhereInput[]
    OR?: BenefitWhereInput[]
    NOT?: BenefitWhereInput | BenefitWhereInput[]
    id?: IntFilter<"Benefit"> | number
    title?: StringFilter<"Benefit"> | string
    description?: StringFilter<"Benefit"> | string
    imageUrl?: StringNullableFilter<"Benefit"> | string | null
    displayOrder?: IntFilter<"Benefit"> | number
    isActive?: BoolFilter<"Benefit"> | boolean
    createdAt?: DateTimeFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeFilter<"Benefit"> | Date | string
  }

  export type BenefitOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BenefitWhereInput | BenefitWhereInput[]
    OR?: BenefitWhereInput[]
    NOT?: BenefitWhereInput | BenefitWhereInput[]
    title?: StringFilter<"Benefit"> | string
    description?: StringFilter<"Benefit"> | string
    imageUrl?: StringNullableFilter<"Benefit"> | string | null
    displayOrder?: IntFilter<"Benefit"> | number
    isActive?: BoolFilter<"Benefit"> | boolean
    createdAt?: DateTimeFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeFilter<"Benefit"> | Date | string
  }, "id">

  export type BenefitOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BenefitCountOrderByAggregateInput
    _avg?: BenefitAvgOrderByAggregateInput
    _max?: BenefitMaxOrderByAggregateInput
    _min?: BenefitMinOrderByAggregateInput
    _sum?: BenefitSumOrderByAggregateInput
  }

  export type BenefitScalarWhereWithAggregatesInput = {
    AND?: BenefitScalarWhereWithAggregatesInput | BenefitScalarWhereWithAggregatesInput[]
    OR?: BenefitScalarWhereWithAggregatesInput[]
    NOT?: BenefitScalarWhereWithAggregatesInput | BenefitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Benefit"> | number
    title?: StringWithAggregatesFilter<"Benefit"> | string
    description?: StringWithAggregatesFilter<"Benefit"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Benefit"> | string | null
    displayOrder?: IntWithAggregatesFilter<"Benefit"> | number
    isActive?: BoolWithAggregatesFilter<"Benefit"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Benefit"> | Date | string
  }

  export type TestimonialWhereInput = {
    AND?: TestimonialWhereInput | TestimonialWhereInput[]
    OR?: TestimonialWhereInput[]
    NOT?: TestimonialWhereInput | TestimonialWhereInput[]
    id?: IntFilter<"Testimonial"> | number
    name?: StringFilter<"Testimonial"> | string
    content?: StringFilter<"Testimonial"> | string
    rating?: IntFilter<"Testimonial"> | number
    imageUrl?: StringNullableFilter<"Testimonial"> | string | null
    displayOrder?: IntFilter<"Testimonial"> | number
    isActive?: BoolFilter<"Testimonial"> | boolean
    createdAt?: DateTimeFilter<"Testimonial"> | Date | string
    updatedAt?: DateTimeFilter<"Testimonial"> | Date | string
  }

  export type TestimonialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestimonialWhereInput | TestimonialWhereInput[]
    OR?: TestimonialWhereInput[]
    NOT?: TestimonialWhereInput | TestimonialWhereInput[]
    name?: StringFilter<"Testimonial"> | string
    content?: StringFilter<"Testimonial"> | string
    rating?: IntFilter<"Testimonial"> | number
    imageUrl?: StringNullableFilter<"Testimonial"> | string | null
    displayOrder?: IntFilter<"Testimonial"> | number
    isActive?: BoolFilter<"Testimonial"> | boolean
    createdAt?: DateTimeFilter<"Testimonial"> | Date | string
    updatedAt?: DateTimeFilter<"Testimonial"> | Date | string
  }, "id">

  export type TestimonialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestimonialCountOrderByAggregateInput
    _avg?: TestimonialAvgOrderByAggregateInput
    _max?: TestimonialMaxOrderByAggregateInput
    _min?: TestimonialMinOrderByAggregateInput
    _sum?: TestimonialSumOrderByAggregateInput
  }

  export type TestimonialScalarWhereWithAggregatesInput = {
    AND?: TestimonialScalarWhereWithAggregatesInput | TestimonialScalarWhereWithAggregatesInput[]
    OR?: TestimonialScalarWhereWithAggregatesInput[]
    NOT?: TestimonialScalarWhereWithAggregatesInput | TestimonialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Testimonial"> | number
    name?: StringWithAggregatesFilter<"Testimonial"> | string
    content?: StringWithAggregatesFilter<"Testimonial"> | string
    rating?: IntWithAggregatesFilter<"Testimonial"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Testimonial"> | string | null
    displayOrder?: IntWithAggregatesFilter<"Testimonial"> | number
    isActive?: BoolWithAggregatesFilter<"Testimonial"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Testimonial"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Testimonial"> | Date | string
  }

  export type PromotionWhereInput = {
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    id?: IntFilter<"Promotion"> | number
    title?: StringFilter<"Promotion"> | string
    description?: StringFilter<"Promotion"> | string
    imageUrl?: StringNullableFilter<"Promotion"> | string | null
    buttonText?: StringNullableFilter<"Promotion"> | string | null
    buttonUrl?: StringNullableFilter<"Promotion"> | string | null
    startDate?: DateTimeNullableFilter<"Promotion"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Promotion"> | Date | string | null
    isActive?: BoolFilter<"Promotion"> | boolean
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    updatedAt?: DateTimeFilter<"Promotion"> | Date | string
  }

  export type PromotionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    buttonText?: SortOrderInput | SortOrder
    buttonUrl?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    title?: StringFilter<"Promotion"> | string
    description?: StringFilter<"Promotion"> | string
    imageUrl?: StringNullableFilter<"Promotion"> | string | null
    buttonText?: StringNullableFilter<"Promotion"> | string | null
    buttonUrl?: StringNullableFilter<"Promotion"> | string | null
    startDate?: DateTimeNullableFilter<"Promotion"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Promotion"> | Date | string | null
    isActive?: BoolFilter<"Promotion"> | boolean
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    updatedAt?: DateTimeFilter<"Promotion"> | Date | string
  }, "id">

  export type PromotionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    buttonText?: SortOrderInput | SortOrder
    buttonUrl?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromotionCountOrderByAggregateInput
    _avg?: PromotionAvgOrderByAggregateInput
    _max?: PromotionMaxOrderByAggregateInput
    _min?: PromotionMinOrderByAggregateInput
    _sum?: PromotionSumOrderByAggregateInput
  }

  export type PromotionScalarWhereWithAggregatesInput = {
    AND?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    OR?: PromotionScalarWhereWithAggregatesInput[]
    NOT?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Promotion"> | number
    title?: StringWithAggregatesFilter<"Promotion"> | string
    description?: StringWithAggregatesFilter<"Promotion"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Promotion"> | string | null
    buttonText?: StringNullableWithAggregatesFilter<"Promotion"> | string | null
    buttonUrl?: StringNullableWithAggregatesFilter<"Promotion"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Promotion"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Promotion"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Promotion"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
  }

  export type NavigationItemWhereInput = {
    AND?: NavigationItemWhereInput | NavigationItemWhereInput[]
    OR?: NavigationItemWhereInput[]
    NOT?: NavigationItemWhereInput | NavigationItemWhereInput[]
    id?: IntFilter<"NavigationItem"> | number
    name?: StringFilter<"NavigationItem"> | string
    url?: StringFilter<"NavigationItem"> | string
    displayOrder?: IntFilter<"NavigationItem"> | number
    isActive?: BoolFilter<"NavigationItem"> | boolean
    createdAt?: DateTimeFilter<"NavigationItem"> | Date | string
    updatedAt?: DateTimeFilter<"NavigationItem"> | Date | string
  }

  export type NavigationItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NavigationItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NavigationItemWhereInput | NavigationItemWhereInput[]
    OR?: NavigationItemWhereInput[]
    NOT?: NavigationItemWhereInput | NavigationItemWhereInput[]
    name?: StringFilter<"NavigationItem"> | string
    url?: StringFilter<"NavigationItem"> | string
    displayOrder?: IntFilter<"NavigationItem"> | number
    isActive?: BoolFilter<"NavigationItem"> | boolean
    createdAt?: DateTimeFilter<"NavigationItem"> | Date | string
    updatedAt?: DateTimeFilter<"NavigationItem"> | Date | string
  }, "id">

  export type NavigationItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NavigationItemCountOrderByAggregateInput
    _avg?: NavigationItemAvgOrderByAggregateInput
    _max?: NavigationItemMaxOrderByAggregateInput
    _min?: NavigationItemMinOrderByAggregateInput
    _sum?: NavigationItemSumOrderByAggregateInput
  }

  export type NavigationItemScalarWhereWithAggregatesInput = {
    AND?: NavigationItemScalarWhereWithAggregatesInput | NavigationItemScalarWhereWithAggregatesInput[]
    OR?: NavigationItemScalarWhereWithAggregatesInput[]
    NOT?: NavigationItemScalarWhereWithAggregatesInput | NavigationItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NavigationItem"> | number
    name?: StringWithAggregatesFilter<"NavigationItem"> | string
    url?: StringWithAggregatesFilter<"NavigationItem"> | string
    displayOrder?: IntWithAggregatesFilter<"NavigationItem"> | number
    isActive?: BoolWithAggregatesFilter<"NavigationItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NavigationItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NavigationItem"> | Date | string
  }

  export type WhatsAppSettingsWhereInput = {
    AND?: WhatsAppSettingsWhereInput | WhatsAppSettingsWhereInput[]
    OR?: WhatsAppSettingsWhereInput[]
    NOT?: WhatsAppSettingsWhereInput | WhatsAppSettingsWhereInput[]
    id?: IntFilter<"WhatsAppSettings"> | number
    whatsappNumber?: StringFilter<"WhatsAppSettings"> | string
    defaultMessage?: StringFilter<"WhatsAppSettings"> | string
    businessName?: StringFilter<"WhatsAppSettings"> | string
    orderMessageFormat?: StringFilter<"WhatsAppSettings"> | string
    updatedAt?: DateTimeFilter<"WhatsAppSettings"> | Date | string
  }

  export type WhatsAppSettingsOrderByWithRelationInput = {
    id?: SortOrder
    whatsappNumber?: SortOrder
    defaultMessage?: SortOrder
    businessName?: SortOrder
    orderMessageFormat?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WhatsAppSettingsWhereInput | WhatsAppSettingsWhereInput[]
    OR?: WhatsAppSettingsWhereInput[]
    NOT?: WhatsAppSettingsWhereInput | WhatsAppSettingsWhereInput[]
    whatsappNumber?: StringFilter<"WhatsAppSettings"> | string
    defaultMessage?: StringFilter<"WhatsAppSettings"> | string
    businessName?: StringFilter<"WhatsAppSettings"> | string
    orderMessageFormat?: StringFilter<"WhatsAppSettings"> | string
    updatedAt?: DateTimeFilter<"WhatsAppSettings"> | Date | string
  }, "id">

  export type WhatsAppSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    whatsappNumber?: SortOrder
    defaultMessage?: SortOrder
    businessName?: SortOrder
    orderMessageFormat?: SortOrder
    updatedAt?: SortOrder
    _count?: WhatsAppSettingsCountOrderByAggregateInput
    _avg?: WhatsAppSettingsAvgOrderByAggregateInput
    _max?: WhatsAppSettingsMaxOrderByAggregateInput
    _min?: WhatsAppSettingsMinOrderByAggregateInput
    _sum?: WhatsAppSettingsSumOrderByAggregateInput
  }

  export type WhatsAppSettingsScalarWhereWithAggregatesInput = {
    AND?: WhatsAppSettingsScalarWhereWithAggregatesInput | WhatsAppSettingsScalarWhereWithAggregatesInput[]
    OR?: WhatsAppSettingsScalarWhereWithAggregatesInput[]
    NOT?: WhatsAppSettingsScalarWhereWithAggregatesInput | WhatsAppSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WhatsAppSettings"> | number
    whatsappNumber?: StringWithAggregatesFilter<"WhatsAppSettings"> | string
    defaultMessage?: StringWithAggregatesFilter<"WhatsAppSettings"> | string
    businessName?: StringWithAggregatesFilter<"WhatsAppSettings"> | string
    orderMessageFormat?: StringWithAggregatesFilter<"WhatsAppSettings"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"WhatsAppSettings"> | Date | string
  }

  export type AdminCreateInput = {
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsCreateInput = {
    id?: number
    businessName?: string
    logoUrl?: string | null
    faviconUrl?: string | null
    heroTitle?: string
    heroSubtitle?: string
    heroImageUrl?: string | null
    heroButtonText?: string
    heroButtonLink?: string
    heroVisible?: boolean
    aboutIntro?: string
    footerText?: string
    updatedAt?: Date | string
  }

  export type SiteSettingsUncheckedCreateInput = {
    id?: number
    businessName?: string
    logoUrl?: string | null
    faviconUrl?: string | null
    heroTitle?: string
    heroSubtitle?: string
    heroImageUrl?: string | null
    heroButtonText?: string
    heroButtonLink?: string
    heroVisible?: boolean
    aboutIntro?: string
    footerText?: string
    updatedAt?: Date | string
  }

  export type SiteSettingsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    faviconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    heroImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: StringFieldUpdateOperationsInput | string
    heroButtonLink?: StringFieldUpdateOperationsInput | string
    heroVisible?: BoolFieldUpdateOperationsInput | boolean
    aboutIntro?: StringFieldUpdateOperationsInput | string
    footerText?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    faviconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    heroImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: StringFieldUpdateOperationsInput | string
    heroButtonLink?: StringFieldUpdateOperationsInput | string
    heroVisible?: BoolFieldUpdateOperationsInput | boolean
    aboutIntro?: StringFieldUpdateOperationsInput | string
    footerText?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsCreateManyInput = {
    id?: number
    businessName?: string
    logoUrl?: string | null
    faviconUrl?: string | null
    heroTitle?: string
    heroSubtitle?: string
    heroImageUrl?: string | null
    heroButtonText?: string
    heroButtonLink?: string
    heroVisible?: boolean
    aboutIntro?: string
    footerText?: string
    updatedAt?: Date | string
  }

  export type SiteSettingsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    faviconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    heroImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: StringFieldUpdateOperationsInput | string
    heroButtonLink?: StringFieldUpdateOperationsInput | string
    heroVisible?: BoolFieldUpdateOperationsInput | boolean
    aboutIntro?: StringFieldUpdateOperationsInput | string
    footerText?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    faviconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    heroImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: StringFieldUpdateOperationsInput | string
    heroButtonLink?: StringFieldUpdateOperationsInput | string
    heroVisible?: BoolFieldUpdateOperationsInput | boolean
    aboutIntro?: StringFieldUpdateOperationsInput | string
    footerText?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactDetailsCreateInput = {
    id?: number
    businessName?: string
    address?: string
    phone?: string
    whatsapp?: string
    email?: string
    googleMapsLink?: string
    openingHours?: string
    instagramUrl?: string | null
    facebookUrl?: string | null
    twitterUrl?: string | null
    updatedAt?: Date | string
  }

  export type ContactDetailsUncheckedCreateInput = {
    id?: number
    businessName?: string
    address?: string
    phone?: string
    whatsapp?: string
    email?: string
    googleMapsLink?: string
    openingHours?: string
    instagramUrl?: string | null
    facebookUrl?: string | null
    twitterUrl?: string | null
    updatedAt?: Date | string
  }

  export type ContactDetailsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleMapsLink?: StringFieldUpdateOperationsInput | string
    openingHours?: StringFieldUpdateOperationsInput | string
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleMapsLink?: StringFieldUpdateOperationsInput | string
    openingHours?: StringFieldUpdateOperationsInput | string
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactDetailsCreateManyInput = {
    id?: number
    businessName?: string
    address?: string
    phone?: string
    whatsapp?: string
    email?: string
    googleMapsLink?: string
    openingHours?: string
    instagramUrl?: string | null
    facebookUrl?: string | null
    twitterUrl?: string | null
    updatedAt?: Date | string
  }

  export type ContactDetailsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleMapsLink?: StringFieldUpdateOperationsInput | string
    openingHours?: StringFieldUpdateOperationsInput | string
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleMapsLink?: StringFieldUpdateOperationsInput | string
    openingHours?: StringFieldUpdateOperationsInput | string
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutContentCreateInput = {
    id?: number
    heading?: string
    aboutIntro?: string
    ourStory: string
    storyImageUrl?: string | null
    mission: string
    vision: string
    philosophyIntro?: string
    qualityIntro?: string
    whyChooseUsIntro?: string
    valuesIntro?: string
    galleryTitle?: string
    galleryIntro?: string
    certificationsTitle?: string
    certificationsIntro?: string
    certificationsEnabled?: boolean
    ctaTitle?: string
    ctaButtonText?: string
    ctaButtonLink?: string
    ctaWhatsAppText?: string
    isEnabled?: boolean
    updatedAt?: Date | string
    philosophy?: string
    qualityInfo?: string
    whyChooseUs?: string
    additionalContent?: string | null
    imageUrl?: string | null
  }

  export type AboutContentUncheckedCreateInput = {
    id?: number
    heading?: string
    aboutIntro?: string
    ourStory: string
    storyImageUrl?: string | null
    mission: string
    vision: string
    philosophyIntro?: string
    qualityIntro?: string
    whyChooseUsIntro?: string
    valuesIntro?: string
    galleryTitle?: string
    galleryIntro?: string
    certificationsTitle?: string
    certificationsIntro?: string
    certificationsEnabled?: boolean
    ctaTitle?: string
    ctaButtonText?: string
    ctaButtonLink?: string
    ctaWhatsAppText?: string
    isEnabled?: boolean
    updatedAt?: Date | string
    philosophy?: string
    qualityInfo?: string
    whyChooseUs?: string
    additionalContent?: string | null
    imageUrl?: string | null
  }

  export type AboutContentUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    heading?: StringFieldUpdateOperationsInput | string
    aboutIntro?: StringFieldUpdateOperationsInput | string
    ourStory?: StringFieldUpdateOperationsInput | string
    storyImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    philosophyIntro?: StringFieldUpdateOperationsInput | string
    qualityIntro?: StringFieldUpdateOperationsInput | string
    whyChooseUsIntro?: StringFieldUpdateOperationsInput | string
    valuesIntro?: StringFieldUpdateOperationsInput | string
    galleryTitle?: StringFieldUpdateOperationsInput | string
    galleryIntro?: StringFieldUpdateOperationsInput | string
    certificationsTitle?: StringFieldUpdateOperationsInput | string
    certificationsIntro?: StringFieldUpdateOperationsInput | string
    certificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    ctaTitle?: StringFieldUpdateOperationsInput | string
    ctaButtonText?: StringFieldUpdateOperationsInput | string
    ctaButtonLink?: StringFieldUpdateOperationsInput | string
    ctaWhatsAppText?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    philosophy?: StringFieldUpdateOperationsInput | string
    qualityInfo?: StringFieldUpdateOperationsInput | string
    whyChooseUs?: StringFieldUpdateOperationsInput | string
    additionalContent?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AboutContentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    heading?: StringFieldUpdateOperationsInput | string
    aboutIntro?: StringFieldUpdateOperationsInput | string
    ourStory?: StringFieldUpdateOperationsInput | string
    storyImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    philosophyIntro?: StringFieldUpdateOperationsInput | string
    qualityIntro?: StringFieldUpdateOperationsInput | string
    whyChooseUsIntro?: StringFieldUpdateOperationsInput | string
    valuesIntro?: StringFieldUpdateOperationsInput | string
    galleryTitle?: StringFieldUpdateOperationsInput | string
    galleryIntro?: StringFieldUpdateOperationsInput | string
    certificationsTitle?: StringFieldUpdateOperationsInput | string
    certificationsIntro?: StringFieldUpdateOperationsInput | string
    certificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    ctaTitle?: StringFieldUpdateOperationsInput | string
    ctaButtonText?: StringFieldUpdateOperationsInput | string
    ctaButtonLink?: StringFieldUpdateOperationsInput | string
    ctaWhatsAppText?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    philosophy?: StringFieldUpdateOperationsInput | string
    qualityInfo?: StringFieldUpdateOperationsInput | string
    whyChooseUs?: StringFieldUpdateOperationsInput | string
    additionalContent?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AboutContentCreateManyInput = {
    id?: number
    heading?: string
    aboutIntro?: string
    ourStory: string
    storyImageUrl?: string | null
    mission: string
    vision: string
    philosophyIntro?: string
    qualityIntro?: string
    whyChooseUsIntro?: string
    valuesIntro?: string
    galleryTitle?: string
    galleryIntro?: string
    certificationsTitle?: string
    certificationsIntro?: string
    certificationsEnabled?: boolean
    ctaTitle?: string
    ctaButtonText?: string
    ctaButtonLink?: string
    ctaWhatsAppText?: string
    isEnabled?: boolean
    updatedAt?: Date | string
    philosophy?: string
    qualityInfo?: string
    whyChooseUs?: string
    additionalContent?: string | null
    imageUrl?: string | null
  }

  export type AboutContentUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    heading?: StringFieldUpdateOperationsInput | string
    aboutIntro?: StringFieldUpdateOperationsInput | string
    ourStory?: StringFieldUpdateOperationsInput | string
    storyImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    philosophyIntro?: StringFieldUpdateOperationsInput | string
    qualityIntro?: StringFieldUpdateOperationsInput | string
    whyChooseUsIntro?: StringFieldUpdateOperationsInput | string
    valuesIntro?: StringFieldUpdateOperationsInput | string
    galleryTitle?: StringFieldUpdateOperationsInput | string
    galleryIntro?: StringFieldUpdateOperationsInput | string
    certificationsTitle?: StringFieldUpdateOperationsInput | string
    certificationsIntro?: StringFieldUpdateOperationsInput | string
    certificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    ctaTitle?: StringFieldUpdateOperationsInput | string
    ctaButtonText?: StringFieldUpdateOperationsInput | string
    ctaButtonLink?: StringFieldUpdateOperationsInput | string
    ctaWhatsAppText?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    philosophy?: StringFieldUpdateOperationsInput | string
    qualityInfo?: StringFieldUpdateOperationsInput | string
    whyChooseUs?: StringFieldUpdateOperationsInput | string
    additionalContent?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AboutContentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    heading?: StringFieldUpdateOperationsInput | string
    aboutIntro?: StringFieldUpdateOperationsInput | string
    ourStory?: StringFieldUpdateOperationsInput | string
    storyImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    philosophyIntro?: StringFieldUpdateOperationsInput | string
    qualityIntro?: StringFieldUpdateOperationsInput | string
    whyChooseUsIntro?: StringFieldUpdateOperationsInput | string
    valuesIntro?: StringFieldUpdateOperationsInput | string
    galleryTitle?: StringFieldUpdateOperationsInput | string
    galleryIntro?: StringFieldUpdateOperationsInput | string
    certificationsTitle?: StringFieldUpdateOperationsInput | string
    certificationsIntro?: StringFieldUpdateOperationsInput | string
    certificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    ctaTitle?: StringFieldUpdateOperationsInput | string
    ctaButtonText?: StringFieldUpdateOperationsInput | string
    ctaButtonLink?: StringFieldUpdateOperationsInput | string
    ctaWhatsAppText?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    philosophy?: StringFieldUpdateOperationsInput | string
    qualityInfo?: StringFieldUpdateOperationsInput | string
    whyChooseUs?: StringFieldUpdateOperationsInput | string
    additionalContent?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AboutSectionCreateInput = {
    id: string
    title: string
    isEnabled?: boolean
    displayOrder?: number
  }

  export type AboutSectionUncheckedCreateInput = {
    id: string
    title: string
    isEnabled?: boolean
    displayOrder?: number
  }

  export type AboutSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
  }

  export type AboutSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
  }

  export type AboutSectionCreateManyInput = {
    id: string
    title: string
    isEnabled?: boolean
    displayOrder?: number
  }

  export type AboutSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
  }

  export type AboutSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
  }

  export type AboutPhilosophyItemCreateInput = {
    icon: string
    title: string
    description: string
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutPhilosophyItemUncheckedCreateInput = {
    id?: number
    icon: string
    title: string
    description: string
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutPhilosophyItemUpdateInput = {
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutPhilosophyItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutPhilosophyItemCreateManyInput = {
    id?: number
    icon: string
    title: string
    description: string
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutPhilosophyItemUpdateManyMutationInput = {
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutPhilosophyItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutQualityItemCreateInput = {
    icon: string
    title: string
    description: string
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutQualityItemUncheckedCreateInput = {
    id?: number
    icon: string
    title: string
    description: string
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutQualityItemUpdateInput = {
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutQualityItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutQualityItemCreateManyInput = {
    id?: number
    icon: string
    title: string
    description: string
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutQualityItemUpdateManyMutationInput = {
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutQualityItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutWhyChooseUsItemCreateInput = {
    icon?: string | null
    title: string
    description: string
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutWhyChooseUsItemUncheckedCreateInput = {
    id?: number
    icon?: string | null
    title: string
    description: string
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutWhyChooseUsItemUpdateInput = {
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutWhyChooseUsItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutWhyChooseUsItemCreateManyInput = {
    id?: number
    icon?: string | null
    title: string
    description: string
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutWhyChooseUsItemUpdateManyMutationInput = {
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutWhyChooseUsItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutValueItemCreateInput = {
    icon: string
    title: string
    description: string
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutValueItemUncheckedCreateInput = {
    id?: number
    icon: string
    title: string
    description: string
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutValueItemUpdateInput = {
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutValueItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutValueItemCreateManyInput = {
    id?: number
    icon: string
    title: string
    description: string
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutValueItemUpdateManyMutationInput = {
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutValueItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutGalleryImageCreateInput = {
    imageUrl: string
    title?: string | null
    description?: string | null
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutGalleryImageUncheckedCreateInput = {
    id?: number
    imageUrl: string
    title?: string | null
    description?: string | null
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutGalleryImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutGalleryImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutGalleryImageCreateManyInput = {
    id?: number
    imageUrl: string
    title?: string | null
    description?: string | null
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutGalleryImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutGalleryImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutCertificationCreateInput = {
    imageUrl?: string | null
    title: string
    description?: string | null
    issuer?: string | null
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutCertificationUncheckedCreateInput = {
    id?: number
    imageUrl?: string | null
    title: string
    description?: string | null
    issuer?: string | null
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutCertificationUpdateInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutCertificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutCertificationCreateManyInput = {
    id?: number
    imageUrl?: string | null
    title: string
    description?: string | null
    issuer?: string | null
    displayOrder?: number
    isEnabled?: boolean
  }

  export type AboutCertificationUpdateManyMutationInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AboutCertificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryCreateInput = {
    name: string
    teluguName: string
    englishName: string
    teluguSubtitle?: string | null
    englishSubtitle?: string | null
    description?: string | null
    imageUrl?: string | null
    displayOrder?: number
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    medicines?: MedicineCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    teluguName: string
    englishName: string
    teluguSubtitle?: string | null
    englishSubtitle?: string | null
    description?: string | null
    imageUrl?: string | null
    displayOrder?: number
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    medicines?: MedicineUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    teluguName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    teluguSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    englishSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicines?: MedicineUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teluguName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    teluguSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    englishSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicines?: MedicineUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    teluguName: string
    englishName: string
    teluguSubtitle?: string | null
    englishSubtitle?: string | null
    description?: string | null
    imageUrl?: string | null
    displayOrder?: number
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    teluguName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    teluguSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    englishSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teluguName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    teluguSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    englishSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineCreateInput = {
    name: string
    teluguName: string
    englishName?: string | null
    slug: string
    description: string
    shortDescription?: string | null
    price?: number
    discountPrice?: number | null
    quantity?: string | null
    imageUrl?: string | null
    availability?: string
    whatsappEnabled?: boolean
    displayOrder?: number
    ingredients?: string | null
    benefits?: string | null
    usageInstructions?: string | null
    isFeatured?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutMedicinesInput
  }

  export type MedicineUncheckedCreateInput = {
    id?: number
    name: string
    teluguName: string
    englishName?: string | null
    slug: string
    description: string
    shortDescription?: string | null
    price?: number
    discountPrice?: number | null
    quantity?: string | null
    imageUrl?: string | null
    availability?: string
    whatsappEnabled?: boolean
    displayOrder?: number
    ingredients?: string | null
    benefits?: string | null
    usageInstructions?: string | null
    isFeatured?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutMedicinesInput
  }

  export type MedicineUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    teluguName?: StringFieldUpdateOperationsInput | string
    englishName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: StringFieldUpdateOperationsInput | string
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    ingredients?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    usageInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutMedicinesNestedInput
  }

  export type MedicineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teluguName?: StringFieldUpdateOperationsInput | string
    englishName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: StringFieldUpdateOperationsInput | string
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    ingredients?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    usageInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutMedicinesNestedInput
  }

  export type MedicineCreateManyInput = {
    id?: number
    name: string
    teluguName: string
    englishName?: string | null
    slug: string
    description: string
    shortDescription?: string | null
    price?: number
    discountPrice?: number | null
    quantity?: string | null
    imageUrl?: string | null
    availability?: string
    whatsappEnabled?: boolean
    displayOrder?: number
    ingredients?: string | null
    benefits?: string | null
    usageInstructions?: string | null
    isFeatured?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    teluguName?: StringFieldUpdateOperationsInput | string
    englishName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: StringFieldUpdateOperationsInput | string
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    ingredients?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    usageInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teluguName?: StringFieldUpdateOperationsInput | string
    englishName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: StringFieldUpdateOperationsInput | string
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    ingredients?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    usageInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitCreateInput = {
    title: string
    description: string
    imageUrl?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    imageUrl?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitCreateManyInput = {
    id?: number
    title: string
    description: string
    imageUrl?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialCreateInput = {
    name: string
    content: string
    rating?: number
    imageUrl?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialUncheckedCreateInput = {
    id?: number
    name: string
    content: string
    rating?: number
    imageUrl?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialCreateManyInput = {
    id?: number
    name: string
    content: string
    rating?: number
    imageUrl?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateInput = {
    title: string
    description: string
    imageUrl?: string | null
    buttonText?: string | null
    buttonUrl?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    imageUrl?: string | null
    buttonText?: string | null
    buttonUrl?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    buttonText?: NullableStringFieldUpdateOperationsInput | string | null
    buttonUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    buttonText?: NullableStringFieldUpdateOperationsInput | string | null
    buttonUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateManyInput = {
    id?: number
    title: string
    description: string
    imageUrl?: string | null
    buttonText?: string | null
    buttonUrl?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    buttonText?: NullableStringFieldUpdateOperationsInput | string | null
    buttonUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    buttonText?: NullableStringFieldUpdateOperationsInput | string | null
    buttonUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavigationItemCreateInput = {
    name: string
    url: string
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NavigationItemUncheckedCreateInput = {
    id?: number
    name: string
    url: string
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NavigationItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavigationItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavigationItemCreateManyInput = {
    id?: number
    name: string
    url: string
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NavigationItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavigationItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppSettingsCreateInput = {
    id?: number
    whatsappNumber?: string
    defaultMessage?: string
    businessName?: string
    orderMessageFormat?: string
    updatedAt?: Date | string
  }

  export type WhatsAppSettingsUncheckedCreateInput = {
    id?: number
    whatsappNumber?: string
    defaultMessage?: string
    businessName?: string
    orderMessageFormat?: string
    updatedAt?: Date | string
  }

  export type WhatsAppSettingsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    defaultMessage?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    orderMessageFormat?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    defaultMessage?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    orderMessageFormat?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppSettingsCreateManyInput = {
    id?: number
    whatsappNumber?: string
    defaultMessage?: string
    businessName?: string
    orderMessageFormat?: string
    updatedAt?: Date | string
  }

  export type WhatsAppSettingsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    defaultMessage?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    orderMessageFormat?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    defaultMessage?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    orderMessageFormat?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SiteSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    businessName?: SortOrder
    logoUrl?: SortOrder
    faviconUrl?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    heroImageUrl?: SortOrder
    heroButtonText?: SortOrder
    heroButtonLink?: SortOrder
    heroVisible?: SortOrder
    aboutIntro?: SortOrder
    footerText?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SiteSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    businessName?: SortOrder
    logoUrl?: SortOrder
    faviconUrl?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    heroImageUrl?: SortOrder
    heroButtonText?: SortOrder
    heroButtonLink?: SortOrder
    heroVisible?: SortOrder
    aboutIntro?: SortOrder
    footerText?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    businessName?: SortOrder
    logoUrl?: SortOrder
    faviconUrl?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    heroImageUrl?: SortOrder
    heroButtonText?: SortOrder
    heroButtonLink?: SortOrder
    heroVisible?: SortOrder
    aboutIntro?: SortOrder
    footerText?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ContactDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    businessName?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    googleMapsLink?: SortOrder
    openingHours?: SortOrder
    instagramUrl?: SortOrder
    facebookUrl?: SortOrder
    twitterUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    businessName?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    googleMapsLink?: SortOrder
    openingHours?: SortOrder
    instagramUrl?: SortOrder
    facebookUrl?: SortOrder
    twitterUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    businessName?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    googleMapsLink?: SortOrder
    openingHours?: SortOrder
    instagramUrl?: SortOrder
    facebookUrl?: SortOrder
    twitterUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactDetailsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AboutContentCountOrderByAggregateInput = {
    id?: SortOrder
    heading?: SortOrder
    aboutIntro?: SortOrder
    ourStory?: SortOrder
    storyImageUrl?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    philosophyIntro?: SortOrder
    qualityIntro?: SortOrder
    whyChooseUsIntro?: SortOrder
    valuesIntro?: SortOrder
    galleryTitle?: SortOrder
    galleryIntro?: SortOrder
    certificationsTitle?: SortOrder
    certificationsIntro?: SortOrder
    certificationsEnabled?: SortOrder
    ctaTitle?: SortOrder
    ctaButtonText?: SortOrder
    ctaButtonLink?: SortOrder
    ctaWhatsAppText?: SortOrder
    isEnabled?: SortOrder
    updatedAt?: SortOrder
    philosophy?: SortOrder
    qualityInfo?: SortOrder
    whyChooseUs?: SortOrder
    additionalContent?: SortOrder
    imageUrl?: SortOrder
  }

  export type AboutContentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AboutContentMaxOrderByAggregateInput = {
    id?: SortOrder
    heading?: SortOrder
    aboutIntro?: SortOrder
    ourStory?: SortOrder
    storyImageUrl?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    philosophyIntro?: SortOrder
    qualityIntro?: SortOrder
    whyChooseUsIntro?: SortOrder
    valuesIntro?: SortOrder
    galleryTitle?: SortOrder
    galleryIntro?: SortOrder
    certificationsTitle?: SortOrder
    certificationsIntro?: SortOrder
    certificationsEnabled?: SortOrder
    ctaTitle?: SortOrder
    ctaButtonText?: SortOrder
    ctaButtonLink?: SortOrder
    ctaWhatsAppText?: SortOrder
    isEnabled?: SortOrder
    updatedAt?: SortOrder
    philosophy?: SortOrder
    qualityInfo?: SortOrder
    whyChooseUs?: SortOrder
    additionalContent?: SortOrder
    imageUrl?: SortOrder
  }

  export type AboutContentMinOrderByAggregateInput = {
    id?: SortOrder
    heading?: SortOrder
    aboutIntro?: SortOrder
    ourStory?: SortOrder
    storyImageUrl?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    philosophyIntro?: SortOrder
    qualityIntro?: SortOrder
    whyChooseUsIntro?: SortOrder
    valuesIntro?: SortOrder
    galleryTitle?: SortOrder
    galleryIntro?: SortOrder
    certificationsTitle?: SortOrder
    certificationsIntro?: SortOrder
    certificationsEnabled?: SortOrder
    ctaTitle?: SortOrder
    ctaButtonText?: SortOrder
    ctaButtonLink?: SortOrder
    ctaWhatsAppText?: SortOrder
    isEnabled?: SortOrder
    updatedAt?: SortOrder
    philosophy?: SortOrder
    qualityInfo?: SortOrder
    whyChooseUs?: SortOrder
    additionalContent?: SortOrder
    imageUrl?: SortOrder
  }

  export type AboutContentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AboutSectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isEnabled?: SortOrder
    displayOrder?: SortOrder
  }

  export type AboutSectionAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type AboutSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isEnabled?: SortOrder
    displayOrder?: SortOrder
  }

  export type AboutSectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isEnabled?: SortOrder
    displayOrder?: SortOrder
  }

  export type AboutSectionSumOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type AboutPhilosophyItemCountOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutPhilosophyItemAvgOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type AboutPhilosophyItemMaxOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutPhilosophyItemMinOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutPhilosophyItemSumOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type AboutQualityItemCountOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutQualityItemAvgOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type AboutQualityItemMaxOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutQualityItemMinOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutQualityItemSumOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type AboutWhyChooseUsItemCountOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutWhyChooseUsItemAvgOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type AboutWhyChooseUsItemMaxOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutWhyChooseUsItemMinOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutWhyChooseUsItemSumOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type AboutValueItemCountOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutValueItemAvgOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type AboutValueItemMaxOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutValueItemMinOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutValueItemSumOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type AboutGalleryImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutGalleryImageAvgOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type AboutGalleryImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutGalleryImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutGalleryImageSumOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type AboutCertificationCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    issuer?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutCertificationAvgOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type AboutCertificationMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    issuer?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutCertificationMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    issuer?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
  }

  export type AboutCertificationSumOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type MedicineListRelationFilter = {
    every?: MedicineWhereInput
    some?: MedicineWhereInput
    none?: MedicineWhereInput
  }

  export type MedicineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teluguName?: SortOrder
    englishName?: SortOrder
    teluguSubtitle?: SortOrder
    englishSubtitle?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teluguName?: SortOrder
    englishName?: SortOrder
    teluguSubtitle?: SortOrder
    englishSubtitle?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teluguName?: SortOrder
    englishName?: SortOrder
    teluguSubtitle?: SortOrder
    englishSubtitle?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teluguName?: SortOrder
    englishName?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    quantity?: SortOrder
    imageUrl?: SortOrder
    availability?: SortOrder
    whatsappEnabled?: SortOrder
    displayOrder?: SortOrder
    ingredients?: SortOrder
    benefits?: SortOrder
    usageInstructions?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    displayOrder?: SortOrder
  }

  export type MedicineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teluguName?: SortOrder
    englishName?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    quantity?: SortOrder
    imageUrl?: SortOrder
    availability?: SortOrder
    whatsappEnabled?: SortOrder
    displayOrder?: SortOrder
    ingredients?: SortOrder
    benefits?: SortOrder
    usageInstructions?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teluguName?: SortOrder
    englishName?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    quantity?: SortOrder
    imageUrl?: SortOrder
    availability?: SortOrder
    whatsappEnabled?: SortOrder
    displayOrder?: SortOrder
    ingredients?: SortOrder
    benefits?: SortOrder
    usageInstructions?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    displayOrder?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BenefitCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitAvgOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type BenefitMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitSumOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type TestimonialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    displayOrder?: SortOrder
  }

  export type TestimonialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    displayOrder?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PromotionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    buttonText?: SortOrder
    buttonUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    buttonText?: SortOrder
    buttonUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    buttonText?: SortOrder
    buttonUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NavigationItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NavigationItemAvgOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type NavigationItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NavigationItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NavigationItemSumOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type WhatsAppSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    whatsappNumber?: SortOrder
    defaultMessage?: SortOrder
    businessName?: SortOrder
    orderMessageFormat?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WhatsAppSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    whatsappNumber?: SortOrder
    defaultMessage?: SortOrder
    businessName?: SortOrder
    orderMessageFormat?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    whatsappNumber?: SortOrder
    defaultMessage?: SortOrder
    businessName?: SortOrder
    orderMessageFormat?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppSettingsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MedicineCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<MedicineCreateWithoutCategoriesInput, MedicineUncheckedCreateWithoutCategoriesInput> | MedicineCreateWithoutCategoriesInput[] | MedicineUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: MedicineCreateOrConnectWithoutCategoriesInput | MedicineCreateOrConnectWithoutCategoriesInput[]
    connect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
  }

  export type MedicineUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<MedicineCreateWithoutCategoriesInput, MedicineUncheckedCreateWithoutCategoriesInput> | MedicineCreateWithoutCategoriesInput[] | MedicineUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: MedicineCreateOrConnectWithoutCategoriesInput | MedicineCreateOrConnectWithoutCategoriesInput[]
    connect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
  }

  export type MedicineUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<MedicineCreateWithoutCategoriesInput, MedicineUncheckedCreateWithoutCategoriesInput> | MedicineCreateWithoutCategoriesInput[] | MedicineUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: MedicineCreateOrConnectWithoutCategoriesInput | MedicineCreateOrConnectWithoutCategoriesInput[]
    upsert?: MedicineUpsertWithWhereUniqueWithoutCategoriesInput | MedicineUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    disconnect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    delete?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    connect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    update?: MedicineUpdateWithWhereUniqueWithoutCategoriesInput | MedicineUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: MedicineUpdateManyWithWhereWithoutCategoriesInput | MedicineUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: MedicineScalarWhereInput | MedicineScalarWhereInput[]
  }

  export type MedicineUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<MedicineCreateWithoutCategoriesInput, MedicineUncheckedCreateWithoutCategoriesInput> | MedicineCreateWithoutCategoriesInput[] | MedicineUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: MedicineCreateOrConnectWithoutCategoriesInput | MedicineCreateOrConnectWithoutCategoriesInput[]
    upsert?: MedicineUpsertWithWhereUniqueWithoutCategoriesInput | MedicineUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    disconnect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    delete?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    connect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    update?: MedicineUpdateWithWhereUniqueWithoutCategoriesInput | MedicineUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: MedicineUpdateManyWithWhereWithoutCategoriesInput | MedicineUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: MedicineScalarWhereInput | MedicineScalarWhereInput[]
  }

  export type CategoryCreateNestedManyWithoutMedicinesInput = {
    create?: XOR<CategoryCreateWithoutMedicinesInput, CategoryUncheckedCreateWithoutMedicinesInput> | CategoryCreateWithoutMedicinesInput[] | CategoryUncheckedCreateWithoutMedicinesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutMedicinesInput | CategoryCreateOrConnectWithoutMedicinesInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutMedicinesInput = {
    create?: XOR<CategoryCreateWithoutMedicinesInput, CategoryUncheckedCreateWithoutMedicinesInput> | CategoryCreateWithoutMedicinesInput[] | CategoryUncheckedCreateWithoutMedicinesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutMedicinesInput | CategoryCreateOrConnectWithoutMedicinesInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateManyWithoutMedicinesNestedInput = {
    create?: XOR<CategoryCreateWithoutMedicinesInput, CategoryUncheckedCreateWithoutMedicinesInput> | CategoryCreateWithoutMedicinesInput[] | CategoryUncheckedCreateWithoutMedicinesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutMedicinesInput | CategoryCreateOrConnectWithoutMedicinesInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutMedicinesInput | CategoryUpsertWithWhereUniqueWithoutMedicinesInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutMedicinesInput | CategoryUpdateWithWhereUniqueWithoutMedicinesInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutMedicinesInput | CategoryUpdateManyWithWhereWithoutMedicinesInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutMedicinesNestedInput = {
    create?: XOR<CategoryCreateWithoutMedicinesInput, CategoryUncheckedCreateWithoutMedicinesInput> | CategoryCreateWithoutMedicinesInput[] | CategoryUncheckedCreateWithoutMedicinesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutMedicinesInput | CategoryCreateOrConnectWithoutMedicinesInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutMedicinesInput | CategoryUpsertWithWhereUniqueWithoutMedicinesInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutMedicinesInput | CategoryUpdateWithWhereUniqueWithoutMedicinesInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutMedicinesInput | CategoryUpdateManyWithWhereWithoutMedicinesInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MedicineCreateWithoutCategoriesInput = {
    name: string
    teluguName: string
    englishName?: string | null
    slug: string
    description: string
    shortDescription?: string | null
    price?: number
    discountPrice?: number | null
    quantity?: string | null
    imageUrl?: string | null
    availability?: string
    whatsappEnabled?: boolean
    displayOrder?: number
    ingredients?: string | null
    benefits?: string | null
    usageInstructions?: string | null
    isFeatured?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    teluguName: string
    englishName?: string | null
    slug: string
    description: string
    shortDescription?: string | null
    price?: number
    discountPrice?: number | null
    quantity?: string | null
    imageUrl?: string | null
    availability?: string
    whatsappEnabled?: boolean
    displayOrder?: number
    ingredients?: string | null
    benefits?: string | null
    usageInstructions?: string | null
    isFeatured?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineCreateOrConnectWithoutCategoriesInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutCategoriesInput, MedicineUncheckedCreateWithoutCategoriesInput>
  }

  export type MedicineUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: MedicineWhereUniqueInput
    update: XOR<MedicineUpdateWithoutCategoriesInput, MedicineUncheckedUpdateWithoutCategoriesInput>
    create: XOR<MedicineCreateWithoutCategoriesInput, MedicineUncheckedCreateWithoutCategoriesInput>
  }

  export type MedicineUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: MedicineWhereUniqueInput
    data: XOR<MedicineUpdateWithoutCategoriesInput, MedicineUncheckedUpdateWithoutCategoriesInput>
  }

  export type MedicineUpdateManyWithWhereWithoutCategoriesInput = {
    where: MedicineScalarWhereInput
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type MedicineScalarWhereInput = {
    AND?: MedicineScalarWhereInput | MedicineScalarWhereInput[]
    OR?: MedicineScalarWhereInput[]
    NOT?: MedicineScalarWhereInput | MedicineScalarWhereInput[]
    id?: IntFilter<"Medicine"> | number
    name?: StringFilter<"Medicine"> | string
    teluguName?: StringFilter<"Medicine"> | string
    englishName?: StringNullableFilter<"Medicine"> | string | null
    slug?: StringFilter<"Medicine"> | string
    description?: StringFilter<"Medicine"> | string
    shortDescription?: StringNullableFilter<"Medicine"> | string | null
    price?: FloatFilter<"Medicine"> | number
    discountPrice?: FloatNullableFilter<"Medicine"> | number | null
    quantity?: StringNullableFilter<"Medicine"> | string | null
    imageUrl?: StringNullableFilter<"Medicine"> | string | null
    availability?: StringFilter<"Medicine"> | string
    whatsappEnabled?: BoolFilter<"Medicine"> | boolean
    displayOrder?: IntFilter<"Medicine"> | number
    ingredients?: StringNullableFilter<"Medicine"> | string | null
    benefits?: StringNullableFilter<"Medicine"> | string | null
    usageInstructions?: StringNullableFilter<"Medicine"> | string | null
    isFeatured?: BoolFilter<"Medicine"> | boolean
    isActive?: BoolFilter<"Medicine"> | boolean
    createdAt?: DateTimeFilter<"Medicine"> | Date | string
    updatedAt?: DateTimeFilter<"Medicine"> | Date | string
  }

  export type CategoryCreateWithoutMedicinesInput = {
    name: string
    teluguName: string
    englishName: string
    teluguSubtitle?: string | null
    englishSubtitle?: string | null
    description?: string | null
    imageUrl?: string | null
    displayOrder?: number
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutMedicinesInput = {
    id?: number
    name: string
    teluguName: string
    englishName: string
    teluguSubtitle?: string | null
    englishSubtitle?: string | null
    description?: string | null
    imageUrl?: string | null
    displayOrder?: number
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutMedicinesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMedicinesInput, CategoryUncheckedCreateWithoutMedicinesInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutMedicinesInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutMedicinesInput, CategoryUncheckedUpdateWithoutMedicinesInput>
    create: XOR<CategoryCreateWithoutMedicinesInput, CategoryUncheckedCreateWithoutMedicinesInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutMedicinesInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutMedicinesInput, CategoryUncheckedUpdateWithoutMedicinesInput>
  }

  export type CategoryUpdateManyWithWhereWithoutMedicinesInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutMedicinesInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    teluguName?: StringFilter<"Category"> | string
    englishName?: StringFilter<"Category"> | string
    teluguSubtitle?: StringNullableFilter<"Category"> | string | null
    englishSubtitle?: StringNullableFilter<"Category"> | string | null
    description?: StringNullableFilter<"Category"> | string | null
    imageUrl?: StringNullableFilter<"Category"> | string | null
    displayOrder?: IntFilter<"Category"> | number
    isEnabled?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type MedicineUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    teluguName?: StringFieldUpdateOperationsInput | string
    englishName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: StringFieldUpdateOperationsInput | string
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    ingredients?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    usageInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teluguName?: StringFieldUpdateOperationsInput | string
    englishName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: StringFieldUpdateOperationsInput | string
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    ingredients?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    usageInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teluguName?: StringFieldUpdateOperationsInput | string
    englishName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: StringFieldUpdateOperationsInput | string
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    ingredients?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    usageInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutMedicinesInput = {
    name?: StringFieldUpdateOperationsInput | string
    teluguName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    teluguSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    englishSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutMedicinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teluguName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    teluguSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    englishSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyWithoutMedicinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teluguName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    teluguSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    englishSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicineCountOutputTypeDefaultArgs instead
     */
    export type MedicineCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicineCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SiteSettingsDefaultArgs instead
     */
    export type SiteSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SiteSettingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactDetailsDefaultArgs instead
     */
    export type ContactDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactDetailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AboutContentDefaultArgs instead
     */
    export type AboutContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AboutContentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AboutSectionDefaultArgs instead
     */
    export type AboutSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AboutSectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AboutPhilosophyItemDefaultArgs instead
     */
    export type AboutPhilosophyItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AboutPhilosophyItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AboutQualityItemDefaultArgs instead
     */
    export type AboutQualityItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AboutQualityItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AboutWhyChooseUsItemDefaultArgs instead
     */
    export type AboutWhyChooseUsItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AboutWhyChooseUsItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AboutValueItemDefaultArgs instead
     */
    export type AboutValueItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AboutValueItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AboutGalleryImageDefaultArgs instead
     */
    export type AboutGalleryImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AboutGalleryImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AboutCertificationDefaultArgs instead
     */
    export type AboutCertificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AboutCertificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicineDefaultArgs instead
     */
    export type MedicineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BenefitDefaultArgs instead
     */
    export type BenefitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BenefitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestimonialDefaultArgs instead
     */
    export type TestimonialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestimonialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromotionDefaultArgs instead
     */
    export type PromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromotionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NavigationItemDefaultArgs instead
     */
    export type NavigationItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NavigationItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WhatsAppSettingsDefaultArgs instead
     */
    export type WhatsAppSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WhatsAppSettingsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}