
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Spark
 * 
 */
export type Spark = $Result.DefaultSelection<Prisma.$SparkPayload>
/**
 * Model Trigger
 * 
 */
export type Trigger = $Result.DefaultSelection<Prisma.$TriggerPayload>
/**
 * Model AvailableTriggers
 * 
 */
export type AvailableTriggers = $Result.DefaultSelection<Prisma.$AvailableTriggersPayload>
/**
 * Model Action
 * 
 */
export type Action = $Result.DefaultSelection<Prisma.$ActionPayload>
/**
 * Model AvailableAction
 * 
 */
export type AvailableAction = $Result.DefaultSelection<Prisma.$AvailableActionPayload>
/**
 * Model SparkRun
 * 
 */
export type SparkRun = $Result.DefaultSelection<Prisma.$SparkRunPayload>
/**
 * Model SparkRunOutbox
 * 
 */
export type SparkRunOutbox = $Result.DefaultSelection<Prisma.$SparkRunOutboxPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spark`: Exposes CRUD operations for the **Spark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sparks
    * const sparks = await prisma.spark.findMany()
    * ```
    */
  get spark(): Prisma.SparkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trigger`: Exposes CRUD operations for the **Trigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triggers
    * const triggers = await prisma.trigger.findMany()
    * ```
    */
  get trigger(): Prisma.TriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableTriggers`: Exposes CRUD operations for the **AvailableTriggers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableTriggers
    * const availableTriggers = await prisma.availableTriggers.findMany()
    * ```
    */
  get availableTriggers(): Prisma.AvailableTriggersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.action`: Exposes CRUD operations for the **Action** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions
    * const actions = await prisma.action.findMany()
    * ```
    */
  get action(): Prisma.ActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableAction`: Exposes CRUD operations for the **AvailableAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableActions
    * const availableActions = await prisma.availableAction.findMany()
    * ```
    */
  get availableAction(): Prisma.AvailableActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sparkRun`: Exposes CRUD operations for the **SparkRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SparkRuns
    * const sparkRuns = await prisma.sparkRun.findMany()
    * ```
    */
  get sparkRun(): Prisma.SparkRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sparkRunOutbox`: Exposes CRUD operations for the **SparkRunOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SparkRunOutboxes
    * const sparkRunOutboxes = await prisma.sparkRunOutbox.findMany()
    * ```
    */
  get sparkRunOutbox(): Prisma.SparkRunOutboxDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Spark: 'Spark',
    Trigger: 'Trigger',
    AvailableTriggers: 'AvailableTriggers',
    Action: 'Action',
    AvailableAction: 'AvailableAction',
    SparkRun: 'SparkRun',
    SparkRunOutbox: 'SparkRunOutbox'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "spark" | "trigger" | "availableTriggers" | "action" | "availableAction" | "sparkRun" | "sparkRunOutbox"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Spark: {
        payload: Prisma.$SparkPayload<ExtArgs>
        fields: Prisma.SparkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SparkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SparkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkPayload>
          }
          findFirst: {
            args: Prisma.SparkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SparkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkPayload>
          }
          findMany: {
            args: Prisma.SparkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkPayload>[]
          }
          create: {
            args: Prisma.SparkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkPayload>
          }
          createMany: {
            args: Prisma.SparkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SparkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkPayload>[]
          }
          delete: {
            args: Prisma.SparkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkPayload>
          }
          update: {
            args: Prisma.SparkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkPayload>
          }
          deleteMany: {
            args: Prisma.SparkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SparkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SparkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkPayload>[]
          }
          upsert: {
            args: Prisma.SparkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkPayload>
          }
          aggregate: {
            args: Prisma.SparkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpark>
          }
          groupBy: {
            args: Prisma.SparkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SparkGroupByOutputType>[]
          }
          count: {
            args: Prisma.SparkCountArgs<ExtArgs>
            result: $Utils.Optional<SparkCountAggregateOutputType> | number
          }
        }
      }
      Trigger: {
        payload: Prisma.$TriggerPayload<ExtArgs>
        fields: Prisma.TriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findFirst: {
            args: Prisma.TriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findMany: {
            args: Prisma.TriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          create: {
            args: Prisma.TriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          createMany: {
            args: Prisma.TriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          delete: {
            args: Prisma.TriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          update: {
            args: Prisma.TriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          deleteMany: {
            args: Prisma.TriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          upsert: {
            args: Prisma.TriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          aggregate: {
            args: Prisma.TriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrigger>
          }
          groupBy: {
            args: Prisma.TriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerCountAggregateOutputType> | number
          }
        }
      }
      AvailableTriggers: {
        payload: Prisma.$AvailableTriggersPayload<ExtArgs>
        fields: Prisma.AvailableTriggersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableTriggersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableTriggersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          findFirst: {
            args: Prisma.AvailableTriggersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableTriggersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          findMany: {
            args: Prisma.AvailableTriggersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>[]
          }
          create: {
            args: Prisma.AvailableTriggersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          createMany: {
            args: Prisma.AvailableTriggersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableTriggersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>[]
          }
          delete: {
            args: Prisma.AvailableTriggersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          update: {
            args: Prisma.AvailableTriggersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          deleteMany: {
            args: Prisma.AvailableTriggersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableTriggersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailableTriggersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>[]
          }
          upsert: {
            args: Prisma.AvailableTriggersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          aggregate: {
            args: Prisma.AvailableTriggersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableTriggers>
          }
          groupBy: {
            args: Prisma.AvailableTriggersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableTriggersGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableTriggersCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableTriggersCountAggregateOutputType> | number
          }
        }
      }
      Action: {
        payload: Prisma.$ActionPayload<ExtArgs>
        fields: Prisma.ActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findFirst: {
            args: Prisma.ActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findMany: {
            args: Prisma.ActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          create: {
            args: Prisma.ActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          createMany: {
            args: Prisma.ActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          delete: {
            args: Prisma.ActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          update: {
            args: Prisma.ActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          deleteMany: {
            args: Prisma.ActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          upsert: {
            args: Prisma.ActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          aggregate: {
            args: Prisma.ActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAction>
          }
          groupBy: {
            args: Prisma.ActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionCountArgs<ExtArgs>
            result: $Utils.Optional<ActionCountAggregateOutputType> | number
          }
        }
      }
      AvailableAction: {
        payload: Prisma.$AvailableActionPayload<ExtArgs>
        fields: Prisma.AvailableActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          findFirst: {
            args: Prisma.AvailableActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          findMany: {
            args: Prisma.AvailableActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>[]
          }
          create: {
            args: Prisma.AvailableActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          createMany: {
            args: Prisma.AvailableActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>[]
          }
          delete: {
            args: Prisma.AvailableActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          update: {
            args: Prisma.AvailableActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          deleteMany: {
            args: Prisma.AvailableActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailableActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>[]
          }
          upsert: {
            args: Prisma.AvailableActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          aggregate: {
            args: Prisma.AvailableActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableAction>
          }
          groupBy: {
            args: Prisma.AvailableActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableActionCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableActionCountAggregateOutputType> | number
          }
        }
      }
      SparkRun: {
        payload: Prisma.$SparkRunPayload<ExtArgs>
        fields: Prisma.SparkRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SparkRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SparkRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunPayload>
          }
          findFirst: {
            args: Prisma.SparkRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SparkRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunPayload>
          }
          findMany: {
            args: Prisma.SparkRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunPayload>[]
          }
          create: {
            args: Prisma.SparkRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunPayload>
          }
          createMany: {
            args: Prisma.SparkRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SparkRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunPayload>[]
          }
          delete: {
            args: Prisma.SparkRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunPayload>
          }
          update: {
            args: Prisma.SparkRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunPayload>
          }
          deleteMany: {
            args: Prisma.SparkRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SparkRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SparkRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunPayload>[]
          }
          upsert: {
            args: Prisma.SparkRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunPayload>
          }
          aggregate: {
            args: Prisma.SparkRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSparkRun>
          }
          groupBy: {
            args: Prisma.SparkRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<SparkRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.SparkRunCountArgs<ExtArgs>
            result: $Utils.Optional<SparkRunCountAggregateOutputType> | number
          }
        }
      }
      SparkRunOutbox: {
        payload: Prisma.$SparkRunOutboxPayload<ExtArgs>
        fields: Prisma.SparkRunOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SparkRunOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SparkRunOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunOutboxPayload>
          }
          findFirst: {
            args: Prisma.SparkRunOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SparkRunOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunOutboxPayload>
          }
          findMany: {
            args: Prisma.SparkRunOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunOutboxPayload>[]
          }
          create: {
            args: Prisma.SparkRunOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunOutboxPayload>
          }
          createMany: {
            args: Prisma.SparkRunOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SparkRunOutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunOutboxPayload>[]
          }
          delete: {
            args: Prisma.SparkRunOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunOutboxPayload>
          }
          update: {
            args: Prisma.SparkRunOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunOutboxPayload>
          }
          deleteMany: {
            args: Prisma.SparkRunOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SparkRunOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SparkRunOutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunOutboxPayload>[]
          }
          upsert: {
            args: Prisma.SparkRunOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparkRunOutboxPayload>
          }
          aggregate: {
            args: Prisma.SparkRunOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSparkRunOutbox>
          }
          groupBy: {
            args: Prisma.SparkRunOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<SparkRunOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.SparkRunOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<SparkRunOutboxCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    spark?: SparkOmit
    trigger?: TriggerOmit
    availableTriggers?: AvailableTriggersOmit
    action?: ActionOmit
    availableAction?: AvailableActionOmit
    sparkRun?: SparkRunOmit
    sparkRunOutbox?: SparkRunOutboxOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type SparkCountOutputType
   */

  export type SparkCountOutputType = {
    actions: number
    SparkRun: number
  }

  export type SparkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | SparkCountOutputTypeCountActionsArgs
    SparkRun?: boolean | SparkCountOutputTypeCountSparkRunArgs
  }

  // Custom InputTypes
  /**
   * SparkCountOutputType without action
   */
  export type SparkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkCountOutputType
     */
    select?: SparkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SparkCountOutputType without action
   */
  export type SparkCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }

  /**
   * SparkCountOutputType without action
   */
  export type SparkCountOutputTypeCountSparkRunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SparkRunWhereInput
  }


  /**
   * Count Type AvailableTriggersCountOutputType
   */

  export type AvailableTriggersCountOutputType = {
    triggers: number
  }

  export type AvailableTriggersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triggers?: boolean | AvailableTriggersCountOutputTypeCountTriggersArgs
  }

  // Custom InputTypes
  /**
   * AvailableTriggersCountOutputType without action
   */
  export type AvailableTriggersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggersCountOutputType
     */
    select?: AvailableTriggersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableTriggersCountOutputType without action
   */
  export type AvailableTriggersCountOutputTypeCountTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
  }


  /**
   * Count Type AvailableActionCountOutputType
   */

  export type AvailableActionCountOutputType = {
    actions: number
  }

  export type AvailableActionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | AvailableActionCountOutputTypeCountActionsArgs
  }

  // Custom InputTypes
  /**
   * AvailableActionCountOutputType without action
   */
  export type AvailableActionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionCountOutputType
     */
    select?: AvailableActionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableActionCountOutputType without action
   */
  export type AvailableActionCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Spark
   */

  export type AggregateSpark = {
    _count: SparkCountAggregateOutputType | null
    _min: SparkMinAggregateOutputType | null
    _max: SparkMaxAggregateOutputType | null
  }

  export type SparkMinAggregateOutputType = {
    id: string | null
    triggerId: string | null
  }

  export type SparkMaxAggregateOutputType = {
    id: string | null
    triggerId: string | null
  }

  export type SparkCountAggregateOutputType = {
    id: number
    triggerId: number
    _all: number
  }


  export type SparkMinAggregateInputType = {
    id?: true
    triggerId?: true
  }

  export type SparkMaxAggregateInputType = {
    id?: true
    triggerId?: true
  }

  export type SparkCountAggregateInputType = {
    id?: true
    triggerId?: true
    _all?: true
  }

  export type SparkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spark to aggregate.
     */
    where?: SparkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sparks to fetch.
     */
    orderBy?: SparkOrderByWithRelationInput | SparkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SparkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sparks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sparks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sparks
    **/
    _count?: true | SparkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SparkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SparkMaxAggregateInputType
  }

  export type GetSparkAggregateType<T extends SparkAggregateArgs> = {
        [P in keyof T & keyof AggregateSpark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpark[P]>
      : GetScalarType<T[P], AggregateSpark[P]>
  }




  export type SparkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SparkWhereInput
    orderBy?: SparkOrderByWithAggregationInput | SparkOrderByWithAggregationInput[]
    by: SparkScalarFieldEnum[] | SparkScalarFieldEnum
    having?: SparkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SparkCountAggregateInputType | true
    _min?: SparkMinAggregateInputType
    _max?: SparkMaxAggregateInputType
  }

  export type SparkGroupByOutputType = {
    id: string
    triggerId: string
    _count: SparkCountAggregateOutputType | null
    _min: SparkMinAggregateOutputType | null
    _max: SparkMaxAggregateOutputType | null
  }

  type GetSparkGroupByPayload<T extends SparkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SparkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SparkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SparkGroupByOutputType[P]>
            : GetScalarType<T[P], SparkGroupByOutputType[P]>
        }
      >
    >


  export type SparkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
    trigger?: boolean | Spark$triggerArgs<ExtArgs>
    actions?: boolean | Spark$actionsArgs<ExtArgs>
    SparkRun?: boolean | Spark$SparkRunArgs<ExtArgs>
    _count?: boolean | SparkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spark"]>

  export type SparkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
  }, ExtArgs["result"]["spark"]>

  export type SparkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
  }, ExtArgs["result"]["spark"]>

  export type SparkSelectScalar = {
    id?: boolean
    triggerId?: boolean
  }

  export type SparkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "triggerId", ExtArgs["result"]["spark"]>
  export type SparkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | Spark$triggerArgs<ExtArgs>
    actions?: boolean | Spark$actionsArgs<ExtArgs>
    SparkRun?: boolean | Spark$SparkRunArgs<ExtArgs>
    _count?: boolean | SparkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SparkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SparkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SparkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Spark"
    objects: {
      trigger: Prisma.$TriggerPayload<ExtArgs> | null
      actions: Prisma.$ActionPayload<ExtArgs>[]
      SparkRun: Prisma.$SparkRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      triggerId: string
    }, ExtArgs["result"]["spark"]>
    composites: {}
  }

  type SparkGetPayload<S extends boolean | null | undefined | SparkDefaultArgs> = $Result.GetResult<Prisma.$SparkPayload, S>

  type SparkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SparkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SparkCountAggregateInputType | true
    }

  export interface SparkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Spark'], meta: { name: 'Spark' } }
    /**
     * Find zero or one Spark that matches the filter.
     * @param {SparkFindUniqueArgs} args - Arguments to find a Spark
     * @example
     * // Get one Spark
     * const spark = await prisma.spark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SparkFindUniqueArgs>(args: SelectSubset<T, SparkFindUniqueArgs<ExtArgs>>): Prisma__SparkClient<$Result.GetResult<Prisma.$SparkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SparkFindUniqueOrThrowArgs} args - Arguments to find a Spark
     * @example
     * // Get one Spark
     * const spark = await prisma.spark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SparkFindUniqueOrThrowArgs>(args: SelectSubset<T, SparkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SparkClient<$Result.GetResult<Prisma.$SparkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkFindFirstArgs} args - Arguments to find a Spark
     * @example
     * // Get one Spark
     * const spark = await prisma.spark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SparkFindFirstArgs>(args?: SelectSubset<T, SparkFindFirstArgs<ExtArgs>>): Prisma__SparkClient<$Result.GetResult<Prisma.$SparkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkFindFirstOrThrowArgs} args - Arguments to find a Spark
     * @example
     * // Get one Spark
     * const spark = await prisma.spark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SparkFindFirstOrThrowArgs>(args?: SelectSubset<T, SparkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SparkClient<$Result.GetResult<Prisma.$SparkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sparks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sparks
     * const sparks = await prisma.spark.findMany()
     * 
     * // Get first 10 Sparks
     * const sparks = await prisma.spark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sparkWithIdOnly = await prisma.spark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SparkFindManyArgs>(args?: SelectSubset<T, SparkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spark.
     * @param {SparkCreateArgs} args - Arguments to create a Spark.
     * @example
     * // Create one Spark
     * const Spark = await prisma.spark.create({
     *   data: {
     *     // ... data to create a Spark
     *   }
     * })
     * 
     */
    create<T extends SparkCreateArgs>(args: SelectSubset<T, SparkCreateArgs<ExtArgs>>): Prisma__SparkClient<$Result.GetResult<Prisma.$SparkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sparks.
     * @param {SparkCreateManyArgs} args - Arguments to create many Sparks.
     * @example
     * // Create many Sparks
     * const spark = await prisma.spark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SparkCreateManyArgs>(args?: SelectSubset<T, SparkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sparks and returns the data saved in the database.
     * @param {SparkCreateManyAndReturnArgs} args - Arguments to create many Sparks.
     * @example
     * // Create many Sparks
     * const spark = await prisma.spark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sparks and only return the `id`
     * const sparkWithIdOnly = await prisma.spark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SparkCreateManyAndReturnArgs>(args?: SelectSubset<T, SparkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Spark.
     * @param {SparkDeleteArgs} args - Arguments to delete one Spark.
     * @example
     * // Delete one Spark
     * const Spark = await prisma.spark.delete({
     *   where: {
     *     // ... filter to delete one Spark
     *   }
     * })
     * 
     */
    delete<T extends SparkDeleteArgs>(args: SelectSubset<T, SparkDeleteArgs<ExtArgs>>): Prisma__SparkClient<$Result.GetResult<Prisma.$SparkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spark.
     * @param {SparkUpdateArgs} args - Arguments to update one Spark.
     * @example
     * // Update one Spark
     * const spark = await prisma.spark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SparkUpdateArgs>(args: SelectSubset<T, SparkUpdateArgs<ExtArgs>>): Prisma__SparkClient<$Result.GetResult<Prisma.$SparkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sparks.
     * @param {SparkDeleteManyArgs} args - Arguments to filter Sparks to delete.
     * @example
     * // Delete a few Sparks
     * const { count } = await prisma.spark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SparkDeleteManyArgs>(args?: SelectSubset<T, SparkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sparks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sparks
     * const spark = await prisma.spark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SparkUpdateManyArgs>(args: SelectSubset<T, SparkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sparks and returns the data updated in the database.
     * @param {SparkUpdateManyAndReturnArgs} args - Arguments to update many Sparks.
     * @example
     * // Update many Sparks
     * const spark = await prisma.spark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sparks and only return the `id`
     * const sparkWithIdOnly = await prisma.spark.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SparkUpdateManyAndReturnArgs>(args: SelectSubset<T, SparkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Spark.
     * @param {SparkUpsertArgs} args - Arguments to update or create a Spark.
     * @example
     * // Update or create a Spark
     * const spark = await prisma.spark.upsert({
     *   create: {
     *     // ... data to create a Spark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spark we want to update
     *   }
     * })
     */
    upsert<T extends SparkUpsertArgs>(args: SelectSubset<T, SparkUpsertArgs<ExtArgs>>): Prisma__SparkClient<$Result.GetResult<Prisma.$SparkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sparks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkCountArgs} args - Arguments to filter Sparks to count.
     * @example
     * // Count the number of Sparks
     * const count = await prisma.spark.count({
     *   where: {
     *     // ... the filter for the Sparks we want to count
     *   }
     * })
    **/
    count<T extends SparkCountArgs>(
      args?: Subset<T, SparkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SparkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SparkAggregateArgs>(args: Subset<T, SparkAggregateArgs>): Prisma.PrismaPromise<GetSparkAggregateType<T>>

    /**
     * Group by Spark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkGroupByArgs} args - Group by arguments.
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
      T extends SparkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SparkGroupByArgs['orderBy'] }
        : { orderBy?: SparkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SparkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSparkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Spark model
   */
  readonly fields: SparkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Spark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SparkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trigger<T extends Spark$triggerArgs<ExtArgs> = {}>(args?: Subset<T, Spark$triggerArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    actions<T extends Spark$actionsArgs<ExtArgs> = {}>(args?: Subset<T, Spark$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SparkRun<T extends Spark$SparkRunArgs<ExtArgs> = {}>(args?: Subset<T, Spark$SparkRunArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparkRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Spark model
   */
  interface SparkFieldRefs {
    readonly id: FieldRef<"Spark", 'String'>
    readonly triggerId: FieldRef<"Spark", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Spark findUnique
   */
  export type SparkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spark
     */
    select?: SparkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spark
     */
    omit?: SparkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkInclude<ExtArgs> | null
    /**
     * Filter, which Spark to fetch.
     */
    where: SparkWhereUniqueInput
  }

  /**
   * Spark findUniqueOrThrow
   */
  export type SparkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spark
     */
    select?: SparkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spark
     */
    omit?: SparkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkInclude<ExtArgs> | null
    /**
     * Filter, which Spark to fetch.
     */
    where: SparkWhereUniqueInput
  }

  /**
   * Spark findFirst
   */
  export type SparkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spark
     */
    select?: SparkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spark
     */
    omit?: SparkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkInclude<ExtArgs> | null
    /**
     * Filter, which Spark to fetch.
     */
    where?: SparkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sparks to fetch.
     */
    orderBy?: SparkOrderByWithRelationInput | SparkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sparks.
     */
    cursor?: SparkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sparks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sparks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sparks.
     */
    distinct?: SparkScalarFieldEnum | SparkScalarFieldEnum[]
  }

  /**
   * Spark findFirstOrThrow
   */
  export type SparkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spark
     */
    select?: SparkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spark
     */
    omit?: SparkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkInclude<ExtArgs> | null
    /**
     * Filter, which Spark to fetch.
     */
    where?: SparkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sparks to fetch.
     */
    orderBy?: SparkOrderByWithRelationInput | SparkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sparks.
     */
    cursor?: SparkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sparks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sparks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sparks.
     */
    distinct?: SparkScalarFieldEnum | SparkScalarFieldEnum[]
  }

  /**
   * Spark findMany
   */
  export type SparkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spark
     */
    select?: SparkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spark
     */
    omit?: SparkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkInclude<ExtArgs> | null
    /**
     * Filter, which Sparks to fetch.
     */
    where?: SparkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sparks to fetch.
     */
    orderBy?: SparkOrderByWithRelationInput | SparkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sparks.
     */
    cursor?: SparkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sparks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sparks.
     */
    skip?: number
    distinct?: SparkScalarFieldEnum | SparkScalarFieldEnum[]
  }

  /**
   * Spark create
   */
  export type SparkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spark
     */
    select?: SparkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spark
     */
    omit?: SparkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkInclude<ExtArgs> | null
    /**
     * The data needed to create a Spark.
     */
    data: XOR<SparkCreateInput, SparkUncheckedCreateInput>
  }

  /**
   * Spark createMany
   */
  export type SparkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sparks.
     */
    data: SparkCreateManyInput | SparkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Spark createManyAndReturn
   */
  export type SparkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spark
     */
    select?: SparkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Spark
     */
    omit?: SparkOmit<ExtArgs> | null
    /**
     * The data used to create many Sparks.
     */
    data: SparkCreateManyInput | SparkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Spark update
   */
  export type SparkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spark
     */
    select?: SparkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spark
     */
    omit?: SparkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkInclude<ExtArgs> | null
    /**
     * The data needed to update a Spark.
     */
    data: XOR<SparkUpdateInput, SparkUncheckedUpdateInput>
    /**
     * Choose, which Spark to update.
     */
    where: SparkWhereUniqueInput
  }

  /**
   * Spark updateMany
   */
  export type SparkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sparks.
     */
    data: XOR<SparkUpdateManyMutationInput, SparkUncheckedUpdateManyInput>
    /**
     * Filter which Sparks to update
     */
    where?: SparkWhereInput
    /**
     * Limit how many Sparks to update.
     */
    limit?: number
  }

  /**
   * Spark updateManyAndReturn
   */
  export type SparkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spark
     */
    select?: SparkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Spark
     */
    omit?: SparkOmit<ExtArgs> | null
    /**
     * The data used to update Sparks.
     */
    data: XOR<SparkUpdateManyMutationInput, SparkUncheckedUpdateManyInput>
    /**
     * Filter which Sparks to update
     */
    where?: SparkWhereInput
    /**
     * Limit how many Sparks to update.
     */
    limit?: number
  }

  /**
   * Spark upsert
   */
  export type SparkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spark
     */
    select?: SparkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spark
     */
    omit?: SparkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkInclude<ExtArgs> | null
    /**
     * The filter to search for the Spark to update in case it exists.
     */
    where: SparkWhereUniqueInput
    /**
     * In case the Spark found by the `where` argument doesn't exist, create a new Spark with this data.
     */
    create: XOR<SparkCreateInput, SparkUncheckedCreateInput>
    /**
     * In case the Spark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SparkUpdateInput, SparkUncheckedUpdateInput>
  }

  /**
   * Spark delete
   */
  export type SparkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spark
     */
    select?: SparkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spark
     */
    omit?: SparkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkInclude<ExtArgs> | null
    /**
     * Filter which Spark to delete.
     */
    where: SparkWhereUniqueInput
  }

  /**
   * Spark deleteMany
   */
  export type SparkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sparks to delete
     */
    where?: SparkWhereInput
    /**
     * Limit how many Sparks to delete.
     */
    limit?: number
  }

  /**
   * Spark.trigger
   */
  export type Spark$triggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
  }

  /**
   * Spark.actions
   */
  export type Spark$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Spark.SparkRun
   */
  export type Spark$SparkRunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRun
     */
    select?: SparkRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRun
     */
    omit?: SparkRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunInclude<ExtArgs> | null
    where?: SparkRunWhereInput
    orderBy?: SparkRunOrderByWithRelationInput | SparkRunOrderByWithRelationInput[]
    cursor?: SparkRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SparkRunScalarFieldEnum | SparkRunScalarFieldEnum[]
  }

  /**
   * Spark without action
   */
  export type SparkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spark
     */
    select?: SparkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spark
     */
    omit?: SparkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkInclude<ExtArgs> | null
  }


  /**
   * Model Trigger
   */

  export type AggregateTrigger = {
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  export type TriggerMinAggregateOutputType = {
    id: string | null
    sparkId: string | null
    triggerId: string | null
  }

  export type TriggerMaxAggregateOutputType = {
    id: string | null
    sparkId: string | null
    triggerId: string | null
  }

  export type TriggerCountAggregateOutputType = {
    id: number
    sparkId: number
    triggerId: number
    _all: number
  }


  export type TriggerMinAggregateInputType = {
    id?: true
    sparkId?: true
    triggerId?: true
  }

  export type TriggerMaxAggregateInputType = {
    id?: true
    sparkId?: true
    triggerId?: true
  }

  export type TriggerCountAggregateInputType = {
    id?: true
    sparkId?: true
    triggerId?: true
    _all?: true
  }

  export type TriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trigger to aggregate.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Triggers
    **/
    _count?: true | TriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerMaxAggregateInputType
  }

  export type GetTriggerAggregateType<T extends TriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrigger[P]>
      : GetScalarType<T[P], AggregateTrigger[P]>
  }




  export type TriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithAggregationInput | TriggerOrderByWithAggregationInput[]
    by: TriggerScalarFieldEnum[] | TriggerScalarFieldEnum
    having?: TriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerCountAggregateInputType | true
    _min?: TriggerMinAggregateInputType
    _max?: TriggerMaxAggregateInputType
  }

  export type TriggerGroupByOutputType = {
    id: string
    sparkId: string
    triggerId: string
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  type GetTriggerGroupByPayload<T extends TriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerGroupByOutputType[P]>
        }
      >
    >


  export type TriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sparkId?: boolean
    triggerId?: boolean
    type?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    spark?: boolean | SparkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sparkId?: boolean
    triggerId?: boolean
    type?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    spark?: boolean | SparkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sparkId?: boolean
    triggerId?: boolean
    type?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    spark?: boolean | SparkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectScalar = {
    id?: boolean
    sparkId?: boolean
    triggerId?: boolean
  }

  export type TriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sparkId" | "triggerId", ExtArgs["result"]["trigger"]>
  export type TriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    spark?: boolean | SparkDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    spark?: boolean | SparkDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    spark?: boolean | SparkDefaultArgs<ExtArgs>
  }

  export type $TriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trigger"
    objects: {
      type: Prisma.$AvailableTriggersPayload<ExtArgs>
      spark: Prisma.$SparkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sparkId: string
      triggerId: string
    }, ExtArgs["result"]["trigger"]>
    composites: {}
  }

  type TriggerGetPayload<S extends boolean | null | undefined | TriggerDefaultArgs> = $Result.GetResult<Prisma.$TriggerPayload, S>

  type TriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerCountAggregateInputType | true
    }

  export interface TriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trigger'], meta: { name: 'Trigger' } }
    /**
     * Find zero or one Trigger that matches the filter.
     * @param {TriggerFindUniqueArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerFindUniqueArgs>(args: SelectSubset<T, TriggerFindUniqueArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerFindUniqueOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerFindFirstArgs>(args?: SelectSubset<T, TriggerFindFirstArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Triggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triggers
     * const triggers = await prisma.trigger.findMany()
     * 
     * // Get first 10 Triggers
     * const triggers = await prisma.trigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerWithIdOnly = await prisma.trigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerFindManyArgs>(args?: SelectSubset<T, TriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trigger.
     * @param {TriggerCreateArgs} args - Arguments to create a Trigger.
     * @example
     * // Create one Trigger
     * const Trigger = await prisma.trigger.create({
     *   data: {
     *     // ... data to create a Trigger
     *   }
     * })
     * 
     */
    create<T extends TriggerCreateArgs>(args: SelectSubset<T, TriggerCreateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Triggers.
     * @param {TriggerCreateManyArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerCreateManyArgs>(args?: SelectSubset<T, TriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Triggers and returns the data saved in the database.
     * @param {TriggerCreateManyAndReturnArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trigger.
     * @param {TriggerDeleteArgs} args - Arguments to delete one Trigger.
     * @example
     * // Delete one Trigger
     * const Trigger = await prisma.trigger.delete({
     *   where: {
     *     // ... filter to delete one Trigger
     *   }
     * })
     * 
     */
    delete<T extends TriggerDeleteArgs>(args: SelectSubset<T, TriggerDeleteArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trigger.
     * @param {TriggerUpdateArgs} args - Arguments to update one Trigger.
     * @example
     * // Update one Trigger
     * const trigger = await prisma.trigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerUpdateArgs>(args: SelectSubset<T, TriggerUpdateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Triggers.
     * @param {TriggerDeleteManyArgs} args - Arguments to filter Triggers to delete.
     * @example
     * // Delete a few Triggers
     * const { count } = await prisma.trigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerDeleteManyArgs>(args?: SelectSubset<T, TriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerUpdateManyArgs>(args: SelectSubset<T, TriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers and returns the data updated in the database.
     * @param {TriggerUpdateManyAndReturnArgs} args - Arguments to update many Triggers.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TriggerUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trigger.
     * @param {TriggerUpsertArgs} args - Arguments to update or create a Trigger.
     * @example
     * // Update or create a Trigger
     * const trigger = await prisma.trigger.upsert({
     *   create: {
     *     // ... data to create a Trigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trigger we want to update
     *   }
     * })
     */
    upsert<T extends TriggerUpsertArgs>(args: SelectSubset<T, TriggerUpsertArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerCountArgs} args - Arguments to filter Triggers to count.
     * @example
     * // Count the number of Triggers
     * const count = await prisma.trigger.count({
     *   where: {
     *     // ... the filter for the Triggers we want to count
     *   }
     * })
    **/
    count<T extends TriggerCountArgs>(
      args?: Subset<T, TriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriggerAggregateArgs>(args: Subset<T, TriggerAggregateArgs>): Prisma.PrismaPromise<GetTriggerAggregateType<T>>

    /**
     * Group by Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerGroupByArgs} args - Group by arguments.
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
      T extends TriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerGroupByArgs['orderBy'] }
        : { orderBy?: TriggerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trigger model
   */
  readonly fields: TriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends AvailableTriggersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTriggersDefaultArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    spark<T extends SparkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SparkDefaultArgs<ExtArgs>>): Prisma__SparkClient<$Result.GetResult<Prisma.$SparkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Trigger model
   */
  interface TriggerFieldRefs {
    readonly id: FieldRef<"Trigger", 'String'>
    readonly sparkId: FieldRef<"Trigger", 'String'>
    readonly triggerId: FieldRef<"Trigger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trigger findUnique
   */
  export type TriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findUniqueOrThrow
   */
  export type TriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findFirst
   */
  export type TriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findFirstOrThrow
   */
  export type TriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findMany
   */
  export type TriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Triggers to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger create
   */
  export type TriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a Trigger.
     */
    data: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
  }

  /**
   * Trigger createMany
   */
  export type TriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigger createManyAndReturn
   */
  export type TriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger update
   */
  export type TriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a Trigger.
     */
    data: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
    /**
     * Choose, which Trigger to update.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger updateMany
   */
  export type TriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
  }

  /**
   * Trigger updateManyAndReturn
   */
  export type TriggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger upsert
   */
  export type TriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the Trigger to update in case it exists.
     */
    where: TriggerWhereUniqueInput
    /**
     * In case the Trigger found by the `where` argument doesn't exist, create a new Trigger with this data.
     */
    create: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
    /**
     * In case the Trigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
  }

  /**
   * Trigger delete
   */
  export type TriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter which Trigger to delete.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger deleteMany
   */
  export type TriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Triggers to delete
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to delete.
     */
    limit?: number
  }

  /**
   * Trigger without action
   */
  export type TriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
  }


  /**
   * Model AvailableTriggers
   */

  export type AggregateAvailableTriggers = {
    _count: AvailableTriggersCountAggregateOutputType | null
    _min: AvailableTriggersMinAggregateOutputType | null
    _max: AvailableTriggersMaxAggregateOutputType | null
  }

  export type AvailableTriggersMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableTriggersMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableTriggersCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AvailableTriggersMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableTriggersMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableTriggersCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AvailableTriggersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTriggers to aggregate.
     */
    where?: AvailableTriggersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggersOrderByWithRelationInput | AvailableTriggersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableTriggersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableTriggers
    **/
    _count?: true | AvailableTriggersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableTriggersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableTriggersMaxAggregateInputType
  }

  export type GetAvailableTriggersAggregateType<T extends AvailableTriggersAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableTriggers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableTriggers[P]>
      : GetScalarType<T[P], AggregateAvailableTriggers[P]>
  }




  export type AvailableTriggersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableTriggersWhereInput
    orderBy?: AvailableTriggersOrderByWithAggregationInput | AvailableTriggersOrderByWithAggregationInput[]
    by: AvailableTriggersScalarFieldEnum[] | AvailableTriggersScalarFieldEnum
    having?: AvailableTriggersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableTriggersCountAggregateInputType | true
    _min?: AvailableTriggersMinAggregateInputType
    _max?: AvailableTriggersMaxAggregateInputType
  }

  export type AvailableTriggersGroupByOutputType = {
    id: string
    name: string
    _count: AvailableTriggersCountAggregateOutputType | null
    _min: AvailableTriggersMinAggregateOutputType | null
    _max: AvailableTriggersMaxAggregateOutputType | null
  }

  type GetAvailableTriggersGroupByPayload<T extends AvailableTriggersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableTriggersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableTriggersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableTriggersGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableTriggersGroupByOutputType[P]>
        }
      >
    >


  export type AvailableTriggersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    triggers?: boolean | AvailableTriggers$triggersArgs<ExtArgs>
    _count?: boolean | AvailableTriggersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableTriggers"]>

  export type AvailableTriggersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableTriggers"]>

  export type AvailableTriggersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableTriggers"]>

  export type AvailableTriggersSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AvailableTriggersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["availableTriggers"]>
  export type AvailableTriggersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triggers?: boolean | AvailableTriggers$triggersArgs<ExtArgs>
    _count?: boolean | AvailableTriggersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableTriggersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvailableTriggersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailableTriggersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableTriggers"
    objects: {
      triggers: Prisma.$TriggerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["availableTriggers"]>
    composites: {}
  }

  type AvailableTriggersGetPayload<S extends boolean | null | undefined | AvailableTriggersDefaultArgs> = $Result.GetResult<Prisma.$AvailableTriggersPayload, S>

  type AvailableTriggersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableTriggersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableTriggersCountAggregateInputType | true
    }

  export interface AvailableTriggersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableTriggers'], meta: { name: 'AvailableTriggers' } }
    /**
     * Find zero or one AvailableTriggers that matches the filter.
     * @param {AvailableTriggersFindUniqueArgs} args - Arguments to find a AvailableTriggers
     * @example
     * // Get one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableTriggersFindUniqueArgs>(args: SelectSubset<T, AvailableTriggersFindUniqueArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableTriggers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableTriggersFindUniqueOrThrowArgs} args - Arguments to find a AvailableTriggers
     * @example
     * // Get one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableTriggersFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableTriggersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersFindFirstArgs} args - Arguments to find a AvailableTriggers
     * @example
     * // Get one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableTriggersFindFirstArgs>(args?: SelectSubset<T, AvailableTriggersFindFirstArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableTriggers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersFindFirstOrThrowArgs} args - Arguments to find a AvailableTriggers
     * @example
     * // Get one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableTriggersFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableTriggersFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findMany()
     * 
     * // Get first 10 AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableTriggersWithIdOnly = await prisma.availableTriggers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableTriggersFindManyArgs>(args?: SelectSubset<T, AvailableTriggersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableTriggers.
     * @param {AvailableTriggersCreateArgs} args - Arguments to create a AvailableTriggers.
     * @example
     * // Create one AvailableTriggers
     * const AvailableTriggers = await prisma.availableTriggers.create({
     *   data: {
     *     // ... data to create a AvailableTriggers
     *   }
     * })
     * 
     */
    create<T extends AvailableTriggersCreateArgs>(args: SelectSubset<T, AvailableTriggersCreateArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableTriggers.
     * @param {AvailableTriggersCreateManyArgs} args - Arguments to create many AvailableTriggers.
     * @example
     * // Create many AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableTriggersCreateManyArgs>(args?: SelectSubset<T, AvailableTriggersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableTriggers and returns the data saved in the database.
     * @param {AvailableTriggersCreateManyAndReturnArgs} args - Arguments to create many AvailableTriggers.
     * @example
     * // Create many AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableTriggers and only return the `id`
     * const availableTriggersWithIdOnly = await prisma.availableTriggers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableTriggersCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableTriggersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableTriggers.
     * @param {AvailableTriggersDeleteArgs} args - Arguments to delete one AvailableTriggers.
     * @example
     * // Delete one AvailableTriggers
     * const AvailableTriggers = await prisma.availableTriggers.delete({
     *   where: {
     *     // ... filter to delete one AvailableTriggers
     *   }
     * })
     * 
     */
    delete<T extends AvailableTriggersDeleteArgs>(args: SelectSubset<T, AvailableTriggersDeleteArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableTriggers.
     * @param {AvailableTriggersUpdateArgs} args - Arguments to update one AvailableTriggers.
     * @example
     * // Update one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableTriggersUpdateArgs>(args: SelectSubset<T, AvailableTriggersUpdateArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableTriggers.
     * @param {AvailableTriggersDeleteManyArgs} args - Arguments to filter AvailableTriggers to delete.
     * @example
     * // Delete a few AvailableTriggers
     * const { count } = await prisma.availableTriggers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableTriggersDeleteManyArgs>(args?: SelectSubset<T, AvailableTriggersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableTriggersUpdateManyArgs>(args: SelectSubset<T, AvailableTriggersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableTriggers and returns the data updated in the database.
     * @param {AvailableTriggersUpdateManyAndReturnArgs} args - Arguments to update many AvailableTriggers.
     * @example
     * // Update many AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailableTriggers and only return the `id`
     * const availableTriggersWithIdOnly = await prisma.availableTriggers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailableTriggersUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailableTriggersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailableTriggers.
     * @param {AvailableTriggersUpsertArgs} args - Arguments to update or create a AvailableTriggers.
     * @example
     * // Update or create a AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.upsert({
     *   create: {
     *     // ... data to create a AvailableTriggers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableTriggers we want to update
     *   }
     * })
     */
    upsert<T extends AvailableTriggersUpsertArgs>(args: SelectSubset<T, AvailableTriggersUpsertArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersCountArgs} args - Arguments to filter AvailableTriggers to count.
     * @example
     * // Count the number of AvailableTriggers
     * const count = await prisma.availableTriggers.count({
     *   where: {
     *     // ... the filter for the AvailableTriggers we want to count
     *   }
     * })
    **/
    count<T extends AvailableTriggersCountArgs>(
      args?: Subset<T, AvailableTriggersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableTriggersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailableTriggersAggregateArgs>(args: Subset<T, AvailableTriggersAggregateArgs>): Prisma.PrismaPromise<GetAvailableTriggersAggregateType<T>>

    /**
     * Group by AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersGroupByArgs} args - Group by arguments.
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
      T extends AvailableTriggersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableTriggersGroupByArgs['orderBy'] }
        : { orderBy?: AvailableTriggersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailableTriggersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableTriggersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableTriggers model
   */
  readonly fields: AvailableTriggersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableTriggers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableTriggersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    triggers<T extends AvailableTriggers$triggersArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTriggers$triggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AvailableTriggers model
   */
  interface AvailableTriggersFieldRefs {
    readonly id: FieldRef<"AvailableTriggers", 'String'>
    readonly name: FieldRef<"AvailableTriggers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableTriggers findUnique
   */
  export type AvailableTriggersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where: AvailableTriggersWhereUniqueInput
  }

  /**
   * AvailableTriggers findUniqueOrThrow
   */
  export type AvailableTriggersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where: AvailableTriggersWhereUniqueInput
  }

  /**
   * AvailableTriggers findFirst
   */
  export type AvailableTriggersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where?: AvailableTriggersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggersOrderByWithRelationInput | AvailableTriggersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTriggers.
     */
    cursor?: AvailableTriggersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?: AvailableTriggersScalarFieldEnum | AvailableTriggersScalarFieldEnum[]
  }

  /**
   * AvailableTriggers findFirstOrThrow
   */
  export type AvailableTriggersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where?: AvailableTriggersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggersOrderByWithRelationInput | AvailableTriggersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTriggers.
     */
    cursor?: AvailableTriggersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?: AvailableTriggersScalarFieldEnum | AvailableTriggersScalarFieldEnum[]
  }

  /**
   * AvailableTriggers findMany
   */
  export type AvailableTriggersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where?: AvailableTriggersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggersOrderByWithRelationInput | AvailableTriggersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableTriggers.
     */
    cursor?: AvailableTriggersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    distinct?: AvailableTriggersScalarFieldEnum | AvailableTriggersScalarFieldEnum[]
  }

  /**
   * AvailableTriggers create
   */
  export type AvailableTriggersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableTriggers.
     */
    data: XOR<AvailableTriggersCreateInput, AvailableTriggersUncheckedCreateInput>
  }

  /**
   * AvailableTriggers createMany
   */
  export type AvailableTriggersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableTriggers.
     */
    data: AvailableTriggersCreateManyInput | AvailableTriggersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableTriggers createManyAndReturn
   */
  export type AvailableTriggersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableTriggers.
     */
    data: AvailableTriggersCreateManyInput | AvailableTriggersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableTriggers update
   */
  export type AvailableTriggersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableTriggers.
     */
    data: XOR<AvailableTriggersUpdateInput, AvailableTriggersUncheckedUpdateInput>
    /**
     * Choose, which AvailableTriggers to update.
     */
    where: AvailableTriggersWhereUniqueInput
  }

  /**
   * AvailableTriggers updateMany
   */
  export type AvailableTriggersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableTriggers.
     */
    data: XOR<AvailableTriggersUpdateManyMutationInput, AvailableTriggersUncheckedUpdateManyInput>
    /**
     * Filter which AvailableTriggers to update
     */
    where?: AvailableTriggersWhereInput
    /**
     * Limit how many AvailableTriggers to update.
     */
    limit?: number
  }

  /**
   * AvailableTriggers updateManyAndReturn
   */
  export type AvailableTriggersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * The data used to update AvailableTriggers.
     */
    data: XOR<AvailableTriggersUpdateManyMutationInput, AvailableTriggersUncheckedUpdateManyInput>
    /**
     * Filter which AvailableTriggers to update
     */
    where?: AvailableTriggersWhereInput
    /**
     * Limit how many AvailableTriggers to update.
     */
    limit?: number
  }

  /**
   * AvailableTriggers upsert
   */
  export type AvailableTriggersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableTriggers to update in case it exists.
     */
    where: AvailableTriggersWhereUniqueInput
    /**
     * In case the AvailableTriggers found by the `where` argument doesn't exist, create a new AvailableTriggers with this data.
     */
    create: XOR<AvailableTriggersCreateInput, AvailableTriggersUncheckedCreateInput>
    /**
     * In case the AvailableTriggers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableTriggersUpdateInput, AvailableTriggersUncheckedUpdateInput>
  }

  /**
   * AvailableTriggers delete
   */
  export type AvailableTriggersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter which AvailableTriggers to delete.
     */
    where: AvailableTriggersWhereUniqueInput
  }

  /**
   * AvailableTriggers deleteMany
   */
  export type AvailableTriggersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTriggers to delete
     */
    where?: AvailableTriggersWhereInput
    /**
     * Limit how many AvailableTriggers to delete.
     */
    limit?: number
  }

  /**
   * AvailableTriggers.triggers
   */
  export type AvailableTriggers$triggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    cursor?: TriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * AvailableTriggers without action
   */
  export type AvailableTriggersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
  }


  /**
   * Model Action
   */

  export type AggregateAction = {
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  export type ActionAvgAggregateOutputType = {
    sortingOrder: number | null
  }

  export type ActionSumAggregateOutputType = {
    sortingOrder: number | null
  }

  export type ActionMinAggregateOutputType = {
    id: string | null
    sparkId: string | null
    actionId: string | null
    sortingOrder: number | null
  }

  export type ActionMaxAggregateOutputType = {
    id: string | null
    sparkId: string | null
    actionId: string | null
    sortingOrder: number | null
  }

  export type ActionCountAggregateOutputType = {
    id: number
    sparkId: number
    actionId: number
    sortingOrder: number
    _all: number
  }


  export type ActionAvgAggregateInputType = {
    sortingOrder?: true
  }

  export type ActionSumAggregateInputType = {
    sortingOrder?: true
  }

  export type ActionMinAggregateInputType = {
    id?: true
    sparkId?: true
    actionId?: true
    sortingOrder?: true
  }

  export type ActionMaxAggregateInputType = {
    id?: true
    sparkId?: true
    actionId?: true
    sortingOrder?: true
  }

  export type ActionCountAggregateInputType = {
    id?: true
    sparkId?: true
    actionId?: true
    sortingOrder?: true
    _all?: true
  }

  export type ActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Action to aggregate.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actions
    **/
    _count?: true | ActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionMaxAggregateInputType
  }

  export type GetActionAggregateType<T extends ActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAction[P]>
      : GetScalarType<T[P], AggregateAction[P]>
  }




  export type ActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithAggregationInput | ActionOrderByWithAggregationInput[]
    by: ActionScalarFieldEnum[] | ActionScalarFieldEnum
    having?: ActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionCountAggregateInputType | true
    _avg?: ActionAvgAggregateInputType
    _sum?: ActionSumAggregateInputType
    _min?: ActionMinAggregateInputType
    _max?: ActionMaxAggregateInputType
  }

  export type ActionGroupByOutputType = {
    id: string
    sparkId: string
    actionId: string
    sortingOrder: number
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  type GetActionGroupByPayload<T extends ActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionGroupByOutputType[P]>
            : GetScalarType<T[P], ActionGroupByOutputType[P]>
        }
      >
    >


  export type ActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sparkId?: boolean
    actionId?: boolean
    sortingOrder?: boolean
    spark?: boolean | SparkDefaultArgs<ExtArgs>
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sparkId?: boolean
    actionId?: boolean
    sortingOrder?: boolean
    spark?: boolean | SparkDefaultArgs<ExtArgs>
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sparkId?: boolean
    actionId?: boolean
    sortingOrder?: boolean
    spark?: boolean | SparkDefaultArgs<ExtArgs>
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectScalar = {
    id?: boolean
    sparkId?: boolean
    actionId?: boolean
    sortingOrder?: boolean
  }

  export type ActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sparkId" | "actionId" | "sortingOrder", ExtArgs["result"]["action"]>
  export type ActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spark?: boolean | SparkDefaultArgs<ExtArgs>
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
  }
  export type ActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spark?: boolean | SparkDefaultArgs<ExtArgs>
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
  }
  export type ActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spark?: boolean | SparkDefaultArgs<ExtArgs>
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
  }

  export type $ActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Action"
    objects: {
      spark: Prisma.$SparkPayload<ExtArgs>
      type: Prisma.$AvailableActionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sparkId: string
      actionId: string
      sortingOrder: number
    }, ExtArgs["result"]["action"]>
    composites: {}
  }

  type ActionGetPayload<S extends boolean | null | undefined | ActionDefaultArgs> = $Result.GetResult<Prisma.$ActionPayload, S>

  type ActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionCountAggregateInputType | true
    }

  export interface ActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Action'], meta: { name: 'Action' } }
    /**
     * Find zero or one Action that matches the filter.
     * @param {ActionFindUniqueArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFindUniqueArgs>(args: SelectSubset<T, ActionFindUniqueArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Action that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFindUniqueOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFindFirstArgs>(args?: SelectSubset<T, ActionFindFirstArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.action.findMany()
     * 
     * // Get first 10 Actions
     * const actions = await prisma.action.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionWithIdOnly = await prisma.action.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionFindManyArgs>(args?: SelectSubset<T, ActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Action.
     * @param {ActionCreateArgs} args - Arguments to create a Action.
     * @example
     * // Create one Action
     * const Action = await prisma.action.create({
     *   data: {
     *     // ... data to create a Action
     *   }
     * })
     * 
     */
    create<T extends ActionCreateArgs>(args: SelectSubset<T, ActionCreateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actions.
     * @param {ActionCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionCreateManyArgs>(args?: SelectSubset<T, ActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {ActionCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Action.
     * @param {ActionDeleteArgs} args - Arguments to delete one Action.
     * @example
     * // Delete one Action
     * const Action = await prisma.action.delete({
     *   where: {
     *     // ... filter to delete one Action
     *   }
     * })
     * 
     */
    delete<T extends ActionDeleteArgs>(args: SelectSubset<T, ActionDeleteArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Action.
     * @param {ActionUpdateArgs} args - Arguments to update one Action.
     * @example
     * // Update one Action
     * const action = await prisma.action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionUpdateArgs>(args: SelectSubset<T, ActionUpdateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actions.
     * @param {ActionDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionDeleteManyArgs>(args?: SelectSubset<T, ActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionUpdateManyArgs>(args: SelectSubset<T, ActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions and returns the data updated in the database.
     * @param {ActionUpdateManyAndReturnArgs} args - Arguments to update many Actions.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActionUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Action.
     * @param {ActionUpsertArgs} args - Arguments to update or create a Action.
     * @example
     * // Update or create a Action
     * const action = await prisma.action.upsert({
     *   create: {
     *     // ... data to create a Action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Action we want to update
     *   }
     * })
     */
    upsert<T extends ActionUpsertArgs>(args: SelectSubset<T, ActionUpsertArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.action.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends ActionCountArgs>(
      args?: Subset<T, ActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActionAggregateArgs>(args: Subset<T, ActionAggregateArgs>): Prisma.PrismaPromise<GetActionAggregateType<T>>

    /**
     * Group by Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionGroupByArgs} args - Group by arguments.
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
      T extends ActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionGroupByArgs['orderBy'] }
        : { orderBy?: ActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Action model
   */
  readonly fields: ActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Action.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spark<T extends SparkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SparkDefaultArgs<ExtArgs>>): Prisma__SparkClient<$Result.GetResult<Prisma.$SparkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type<T extends AvailableActionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableActionDefaultArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Action model
   */
  interface ActionFieldRefs {
    readonly id: FieldRef<"Action", 'String'>
    readonly sparkId: FieldRef<"Action", 'String'>
    readonly actionId: FieldRef<"Action", 'String'>
    readonly sortingOrder: FieldRef<"Action", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Action findUnique
   */
  export type ActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findUniqueOrThrow
   */
  export type ActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findFirst
   */
  export type ActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findFirstOrThrow
   */
  export type ActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findMany
   */
  export type ActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action create
   */
  export type ActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to create a Action.
     */
    data: XOR<ActionCreateInput, ActionUncheckedCreateInput>
  }

  /**
   * Action createMany
   */
  export type ActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Action createManyAndReturn
   */
  export type ActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action update
   */
  export type ActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to update a Action.
     */
    data: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
    /**
     * Choose, which Action to update.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action updateMany
   */
  export type ActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
  }

  /**
   * Action updateManyAndReturn
   */
  export type ActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action upsert
   */
  export type ActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The filter to search for the Action to update in case it exists.
     */
    where: ActionWhereUniqueInput
    /**
     * In case the Action found by the `where` argument doesn't exist, create a new Action with this data.
     */
    create: XOR<ActionCreateInput, ActionUncheckedCreateInput>
    /**
     * In case the Action was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
  }

  /**
   * Action delete
   */
  export type ActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter which Action to delete.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action deleteMany
   */
  export type ActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actions to delete
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to delete.
     */
    limit?: number
  }

  /**
   * Action without action
   */
  export type ActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
  }


  /**
   * Model AvailableAction
   */

  export type AggregateAvailableAction = {
    _count: AvailableActionCountAggregateOutputType | null
    _min: AvailableActionMinAggregateOutputType | null
    _max: AvailableActionMaxAggregateOutputType | null
  }

  export type AvailableActionMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableActionMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableActionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AvailableActionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableActionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableActionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AvailableActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableAction to aggregate.
     */
    where?: AvailableActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionOrderByWithRelationInput | AvailableActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableActions
    **/
    _count?: true | AvailableActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableActionMaxAggregateInputType
  }

  export type GetAvailableActionAggregateType<T extends AvailableActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableAction[P]>
      : GetScalarType<T[P], AggregateAvailableAction[P]>
  }




  export type AvailableActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableActionWhereInput
    orderBy?: AvailableActionOrderByWithAggregationInput | AvailableActionOrderByWithAggregationInput[]
    by: AvailableActionScalarFieldEnum[] | AvailableActionScalarFieldEnum
    having?: AvailableActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableActionCountAggregateInputType | true
    _min?: AvailableActionMinAggregateInputType
    _max?: AvailableActionMaxAggregateInputType
  }

  export type AvailableActionGroupByOutputType = {
    id: string
    name: string
    _count: AvailableActionCountAggregateOutputType | null
    _min: AvailableActionMinAggregateOutputType | null
    _max: AvailableActionMaxAggregateOutputType | null
  }

  type GetAvailableActionGroupByPayload<T extends AvailableActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableActionGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableActionGroupByOutputType[P]>
        }
      >
    >


  export type AvailableActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    actions?: boolean | AvailableAction$actionsArgs<ExtArgs>
    _count?: boolean | AvailableActionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableAction"]>

  export type AvailableActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableAction"]>

  export type AvailableActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableAction"]>

  export type AvailableActionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AvailableActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["availableAction"]>
  export type AvailableActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | AvailableAction$actionsArgs<ExtArgs>
    _count?: boolean | AvailableActionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvailableActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailableActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableAction"
    objects: {
      actions: Prisma.$ActionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["availableAction"]>
    composites: {}
  }

  type AvailableActionGetPayload<S extends boolean | null | undefined | AvailableActionDefaultArgs> = $Result.GetResult<Prisma.$AvailableActionPayload, S>

  type AvailableActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableActionCountAggregateInputType | true
    }

  export interface AvailableActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableAction'], meta: { name: 'AvailableAction' } }
    /**
     * Find zero or one AvailableAction that matches the filter.
     * @param {AvailableActionFindUniqueArgs} args - Arguments to find a AvailableAction
     * @example
     * // Get one AvailableAction
     * const availableAction = await prisma.availableAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableActionFindUniqueArgs>(args: SelectSubset<T, AvailableActionFindUniqueArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableActionFindUniqueOrThrowArgs} args - Arguments to find a AvailableAction
     * @example
     * // Get one AvailableAction
     * const availableAction = await prisma.availableAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableActionFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionFindFirstArgs} args - Arguments to find a AvailableAction
     * @example
     * // Get one AvailableAction
     * const availableAction = await prisma.availableAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableActionFindFirstArgs>(args?: SelectSubset<T, AvailableActionFindFirstArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionFindFirstOrThrowArgs} args - Arguments to find a AvailableAction
     * @example
     * // Get one AvailableAction
     * const availableAction = await prisma.availableAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableActionFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableActions
     * const availableActions = await prisma.availableAction.findMany()
     * 
     * // Get first 10 AvailableActions
     * const availableActions = await prisma.availableAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableActionWithIdOnly = await prisma.availableAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableActionFindManyArgs>(args?: SelectSubset<T, AvailableActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableAction.
     * @param {AvailableActionCreateArgs} args - Arguments to create a AvailableAction.
     * @example
     * // Create one AvailableAction
     * const AvailableAction = await prisma.availableAction.create({
     *   data: {
     *     // ... data to create a AvailableAction
     *   }
     * })
     * 
     */
    create<T extends AvailableActionCreateArgs>(args: SelectSubset<T, AvailableActionCreateArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableActions.
     * @param {AvailableActionCreateManyArgs} args - Arguments to create many AvailableActions.
     * @example
     * // Create many AvailableActions
     * const availableAction = await prisma.availableAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableActionCreateManyArgs>(args?: SelectSubset<T, AvailableActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableActions and returns the data saved in the database.
     * @param {AvailableActionCreateManyAndReturnArgs} args - Arguments to create many AvailableActions.
     * @example
     * // Create many AvailableActions
     * const availableAction = await prisma.availableAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableActions and only return the `id`
     * const availableActionWithIdOnly = await prisma.availableAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableActionCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableAction.
     * @param {AvailableActionDeleteArgs} args - Arguments to delete one AvailableAction.
     * @example
     * // Delete one AvailableAction
     * const AvailableAction = await prisma.availableAction.delete({
     *   where: {
     *     // ... filter to delete one AvailableAction
     *   }
     * })
     * 
     */
    delete<T extends AvailableActionDeleteArgs>(args: SelectSubset<T, AvailableActionDeleteArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableAction.
     * @param {AvailableActionUpdateArgs} args - Arguments to update one AvailableAction.
     * @example
     * // Update one AvailableAction
     * const availableAction = await prisma.availableAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableActionUpdateArgs>(args: SelectSubset<T, AvailableActionUpdateArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableActions.
     * @param {AvailableActionDeleteManyArgs} args - Arguments to filter AvailableActions to delete.
     * @example
     * // Delete a few AvailableActions
     * const { count } = await prisma.availableAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableActionDeleteManyArgs>(args?: SelectSubset<T, AvailableActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableActions
     * const availableAction = await prisma.availableAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableActionUpdateManyArgs>(args: SelectSubset<T, AvailableActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableActions and returns the data updated in the database.
     * @param {AvailableActionUpdateManyAndReturnArgs} args - Arguments to update many AvailableActions.
     * @example
     * // Update many AvailableActions
     * const availableAction = await prisma.availableAction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailableActions and only return the `id`
     * const availableActionWithIdOnly = await prisma.availableAction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailableActionUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailableActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailableAction.
     * @param {AvailableActionUpsertArgs} args - Arguments to update or create a AvailableAction.
     * @example
     * // Update or create a AvailableAction
     * const availableAction = await prisma.availableAction.upsert({
     *   create: {
     *     // ... data to create a AvailableAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableAction we want to update
     *   }
     * })
     */
    upsert<T extends AvailableActionUpsertArgs>(args: SelectSubset<T, AvailableActionUpsertArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionCountArgs} args - Arguments to filter AvailableActions to count.
     * @example
     * // Count the number of AvailableActions
     * const count = await prisma.availableAction.count({
     *   where: {
     *     // ... the filter for the AvailableActions we want to count
     *   }
     * })
    **/
    count<T extends AvailableActionCountArgs>(
      args?: Subset<T, AvailableActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailableActionAggregateArgs>(args: Subset<T, AvailableActionAggregateArgs>): Prisma.PrismaPromise<GetAvailableActionAggregateType<T>>

    /**
     * Group by AvailableAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionGroupByArgs} args - Group by arguments.
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
      T extends AvailableActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableActionGroupByArgs['orderBy'] }
        : { orderBy?: AvailableActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailableActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableAction model
   */
  readonly fields: AvailableActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actions<T extends AvailableAction$actionsArgs<ExtArgs> = {}>(args?: Subset<T, AvailableAction$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AvailableAction model
   */
  interface AvailableActionFieldRefs {
    readonly id: FieldRef<"AvailableAction", 'String'>
    readonly name: FieldRef<"AvailableAction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableAction findUnique
   */
  export type AvailableActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAction to fetch.
     */
    where: AvailableActionWhereUniqueInput
  }

  /**
   * AvailableAction findUniqueOrThrow
   */
  export type AvailableActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAction to fetch.
     */
    where: AvailableActionWhereUniqueInput
  }

  /**
   * AvailableAction findFirst
   */
  export type AvailableActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAction to fetch.
     */
    where?: AvailableActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionOrderByWithRelationInput | AvailableActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableActions.
     */
    cursor?: AvailableActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActions.
     */
    distinct?: AvailableActionScalarFieldEnum | AvailableActionScalarFieldEnum[]
  }

  /**
   * AvailableAction findFirstOrThrow
   */
  export type AvailableActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAction to fetch.
     */
    where?: AvailableActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionOrderByWithRelationInput | AvailableActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableActions.
     */
    cursor?: AvailableActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActions.
     */
    distinct?: AvailableActionScalarFieldEnum | AvailableActionScalarFieldEnum[]
  }

  /**
   * AvailableAction findMany
   */
  export type AvailableActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where?: AvailableActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionOrderByWithRelationInput | AvailableActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableActions.
     */
    cursor?: AvailableActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    distinct?: AvailableActionScalarFieldEnum | AvailableActionScalarFieldEnum[]
  }

  /**
   * AvailableAction create
   */
  export type AvailableActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableAction.
     */
    data: XOR<AvailableActionCreateInput, AvailableActionUncheckedCreateInput>
  }

  /**
   * AvailableAction createMany
   */
  export type AvailableActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableActions.
     */
    data: AvailableActionCreateManyInput | AvailableActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableAction createManyAndReturn
   */
  export type AvailableActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableActions.
     */
    data: AvailableActionCreateManyInput | AvailableActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableAction update
   */
  export type AvailableActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableAction.
     */
    data: XOR<AvailableActionUpdateInput, AvailableActionUncheckedUpdateInput>
    /**
     * Choose, which AvailableAction to update.
     */
    where: AvailableActionWhereUniqueInput
  }

  /**
   * AvailableAction updateMany
   */
  export type AvailableActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableActions.
     */
    data: XOR<AvailableActionUpdateManyMutationInput, AvailableActionUncheckedUpdateManyInput>
    /**
     * Filter which AvailableActions to update
     */
    where?: AvailableActionWhereInput
    /**
     * Limit how many AvailableActions to update.
     */
    limit?: number
  }

  /**
   * AvailableAction updateManyAndReturn
   */
  export type AvailableActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * The data used to update AvailableActions.
     */
    data: XOR<AvailableActionUpdateManyMutationInput, AvailableActionUncheckedUpdateManyInput>
    /**
     * Filter which AvailableActions to update
     */
    where?: AvailableActionWhereInput
    /**
     * Limit how many AvailableActions to update.
     */
    limit?: number
  }

  /**
   * AvailableAction upsert
   */
  export type AvailableActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableAction to update in case it exists.
     */
    where: AvailableActionWhereUniqueInput
    /**
     * In case the AvailableAction found by the `where` argument doesn't exist, create a new AvailableAction with this data.
     */
    create: XOR<AvailableActionCreateInput, AvailableActionUncheckedCreateInput>
    /**
     * In case the AvailableAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableActionUpdateInput, AvailableActionUncheckedUpdateInput>
  }

  /**
   * AvailableAction delete
   */
  export type AvailableActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter which AvailableAction to delete.
     */
    where: AvailableActionWhereUniqueInput
  }

  /**
   * AvailableAction deleteMany
   */
  export type AvailableActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableActions to delete
     */
    where?: AvailableActionWhereInput
    /**
     * Limit how many AvailableActions to delete.
     */
    limit?: number
  }

  /**
   * AvailableAction.actions
   */
  export type AvailableAction$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * AvailableAction without action
   */
  export type AvailableActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
  }


  /**
   * Model SparkRun
   */

  export type AggregateSparkRun = {
    _count: SparkRunCountAggregateOutputType | null
    _min: SparkRunMinAggregateOutputType | null
    _max: SparkRunMaxAggregateOutputType | null
  }

  export type SparkRunMinAggregateOutputType = {
    id: string | null
    sparkId: string | null
  }

  export type SparkRunMaxAggregateOutputType = {
    id: string | null
    sparkId: string | null
  }

  export type SparkRunCountAggregateOutputType = {
    id: number
    sparkId: number
    metadata: number
    _all: number
  }


  export type SparkRunMinAggregateInputType = {
    id?: true
    sparkId?: true
  }

  export type SparkRunMaxAggregateInputType = {
    id?: true
    sparkId?: true
  }

  export type SparkRunCountAggregateInputType = {
    id?: true
    sparkId?: true
    metadata?: true
    _all?: true
  }

  export type SparkRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SparkRun to aggregate.
     */
    where?: SparkRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SparkRuns to fetch.
     */
    orderBy?: SparkRunOrderByWithRelationInput | SparkRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SparkRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SparkRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SparkRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SparkRuns
    **/
    _count?: true | SparkRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SparkRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SparkRunMaxAggregateInputType
  }

  export type GetSparkRunAggregateType<T extends SparkRunAggregateArgs> = {
        [P in keyof T & keyof AggregateSparkRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSparkRun[P]>
      : GetScalarType<T[P], AggregateSparkRun[P]>
  }




  export type SparkRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SparkRunWhereInput
    orderBy?: SparkRunOrderByWithAggregationInput | SparkRunOrderByWithAggregationInput[]
    by: SparkRunScalarFieldEnum[] | SparkRunScalarFieldEnum
    having?: SparkRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SparkRunCountAggregateInputType | true
    _min?: SparkRunMinAggregateInputType
    _max?: SparkRunMaxAggregateInputType
  }

  export type SparkRunGroupByOutputType = {
    id: string
    sparkId: string
    metadata: JsonValue
    _count: SparkRunCountAggregateOutputType | null
    _min: SparkRunMinAggregateOutputType | null
    _max: SparkRunMaxAggregateOutputType | null
  }

  type GetSparkRunGroupByPayload<T extends SparkRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SparkRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SparkRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SparkRunGroupByOutputType[P]>
            : GetScalarType<T[P], SparkRunGroupByOutputType[P]>
        }
      >
    >


  export type SparkRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sparkId?: boolean
    metadata?: boolean
    spark?: boolean | SparkDefaultArgs<ExtArgs>
    SparkRunOutbox?: boolean | SparkRun$SparkRunOutboxArgs<ExtArgs>
  }, ExtArgs["result"]["sparkRun"]>

  export type SparkRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sparkId?: boolean
    metadata?: boolean
    spark?: boolean | SparkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sparkRun"]>

  export type SparkRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sparkId?: boolean
    metadata?: boolean
    spark?: boolean | SparkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sparkRun"]>

  export type SparkRunSelectScalar = {
    id?: boolean
    sparkId?: boolean
    metadata?: boolean
  }

  export type SparkRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sparkId" | "metadata", ExtArgs["result"]["sparkRun"]>
  export type SparkRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spark?: boolean | SparkDefaultArgs<ExtArgs>
    SparkRunOutbox?: boolean | SparkRun$SparkRunOutboxArgs<ExtArgs>
  }
  export type SparkRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spark?: boolean | SparkDefaultArgs<ExtArgs>
  }
  export type SparkRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spark?: boolean | SparkDefaultArgs<ExtArgs>
  }

  export type $SparkRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SparkRun"
    objects: {
      spark: Prisma.$SparkPayload<ExtArgs>
      SparkRunOutbox: Prisma.$SparkRunOutboxPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sparkId: string
      metadata: Prisma.JsonValue
    }, ExtArgs["result"]["sparkRun"]>
    composites: {}
  }

  type SparkRunGetPayload<S extends boolean | null | undefined | SparkRunDefaultArgs> = $Result.GetResult<Prisma.$SparkRunPayload, S>

  type SparkRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SparkRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SparkRunCountAggregateInputType | true
    }

  export interface SparkRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SparkRun'], meta: { name: 'SparkRun' } }
    /**
     * Find zero or one SparkRun that matches the filter.
     * @param {SparkRunFindUniqueArgs} args - Arguments to find a SparkRun
     * @example
     * // Get one SparkRun
     * const sparkRun = await prisma.sparkRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SparkRunFindUniqueArgs>(args: SelectSubset<T, SparkRunFindUniqueArgs<ExtArgs>>): Prisma__SparkRunClient<$Result.GetResult<Prisma.$SparkRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SparkRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SparkRunFindUniqueOrThrowArgs} args - Arguments to find a SparkRun
     * @example
     * // Get one SparkRun
     * const sparkRun = await prisma.sparkRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SparkRunFindUniqueOrThrowArgs>(args: SelectSubset<T, SparkRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SparkRunClient<$Result.GetResult<Prisma.$SparkRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SparkRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkRunFindFirstArgs} args - Arguments to find a SparkRun
     * @example
     * // Get one SparkRun
     * const sparkRun = await prisma.sparkRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SparkRunFindFirstArgs>(args?: SelectSubset<T, SparkRunFindFirstArgs<ExtArgs>>): Prisma__SparkRunClient<$Result.GetResult<Prisma.$SparkRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SparkRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkRunFindFirstOrThrowArgs} args - Arguments to find a SparkRun
     * @example
     * // Get one SparkRun
     * const sparkRun = await prisma.sparkRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SparkRunFindFirstOrThrowArgs>(args?: SelectSubset<T, SparkRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__SparkRunClient<$Result.GetResult<Prisma.$SparkRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SparkRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SparkRuns
     * const sparkRuns = await prisma.sparkRun.findMany()
     * 
     * // Get first 10 SparkRuns
     * const sparkRuns = await prisma.sparkRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sparkRunWithIdOnly = await prisma.sparkRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SparkRunFindManyArgs>(args?: SelectSubset<T, SparkRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparkRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SparkRun.
     * @param {SparkRunCreateArgs} args - Arguments to create a SparkRun.
     * @example
     * // Create one SparkRun
     * const SparkRun = await prisma.sparkRun.create({
     *   data: {
     *     // ... data to create a SparkRun
     *   }
     * })
     * 
     */
    create<T extends SparkRunCreateArgs>(args: SelectSubset<T, SparkRunCreateArgs<ExtArgs>>): Prisma__SparkRunClient<$Result.GetResult<Prisma.$SparkRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SparkRuns.
     * @param {SparkRunCreateManyArgs} args - Arguments to create many SparkRuns.
     * @example
     * // Create many SparkRuns
     * const sparkRun = await prisma.sparkRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SparkRunCreateManyArgs>(args?: SelectSubset<T, SparkRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SparkRuns and returns the data saved in the database.
     * @param {SparkRunCreateManyAndReturnArgs} args - Arguments to create many SparkRuns.
     * @example
     * // Create many SparkRuns
     * const sparkRun = await prisma.sparkRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SparkRuns and only return the `id`
     * const sparkRunWithIdOnly = await prisma.sparkRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SparkRunCreateManyAndReturnArgs>(args?: SelectSubset<T, SparkRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparkRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SparkRun.
     * @param {SparkRunDeleteArgs} args - Arguments to delete one SparkRun.
     * @example
     * // Delete one SparkRun
     * const SparkRun = await prisma.sparkRun.delete({
     *   where: {
     *     // ... filter to delete one SparkRun
     *   }
     * })
     * 
     */
    delete<T extends SparkRunDeleteArgs>(args: SelectSubset<T, SparkRunDeleteArgs<ExtArgs>>): Prisma__SparkRunClient<$Result.GetResult<Prisma.$SparkRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SparkRun.
     * @param {SparkRunUpdateArgs} args - Arguments to update one SparkRun.
     * @example
     * // Update one SparkRun
     * const sparkRun = await prisma.sparkRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SparkRunUpdateArgs>(args: SelectSubset<T, SparkRunUpdateArgs<ExtArgs>>): Prisma__SparkRunClient<$Result.GetResult<Prisma.$SparkRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SparkRuns.
     * @param {SparkRunDeleteManyArgs} args - Arguments to filter SparkRuns to delete.
     * @example
     * // Delete a few SparkRuns
     * const { count } = await prisma.sparkRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SparkRunDeleteManyArgs>(args?: SelectSubset<T, SparkRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SparkRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SparkRuns
     * const sparkRun = await prisma.sparkRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SparkRunUpdateManyArgs>(args: SelectSubset<T, SparkRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SparkRuns and returns the data updated in the database.
     * @param {SparkRunUpdateManyAndReturnArgs} args - Arguments to update many SparkRuns.
     * @example
     * // Update many SparkRuns
     * const sparkRun = await prisma.sparkRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SparkRuns and only return the `id`
     * const sparkRunWithIdOnly = await prisma.sparkRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SparkRunUpdateManyAndReturnArgs>(args: SelectSubset<T, SparkRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparkRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SparkRun.
     * @param {SparkRunUpsertArgs} args - Arguments to update or create a SparkRun.
     * @example
     * // Update or create a SparkRun
     * const sparkRun = await prisma.sparkRun.upsert({
     *   create: {
     *     // ... data to create a SparkRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SparkRun we want to update
     *   }
     * })
     */
    upsert<T extends SparkRunUpsertArgs>(args: SelectSubset<T, SparkRunUpsertArgs<ExtArgs>>): Prisma__SparkRunClient<$Result.GetResult<Prisma.$SparkRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SparkRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkRunCountArgs} args - Arguments to filter SparkRuns to count.
     * @example
     * // Count the number of SparkRuns
     * const count = await prisma.sparkRun.count({
     *   where: {
     *     // ... the filter for the SparkRuns we want to count
     *   }
     * })
    **/
    count<T extends SparkRunCountArgs>(
      args?: Subset<T, SparkRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SparkRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SparkRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SparkRunAggregateArgs>(args: Subset<T, SparkRunAggregateArgs>): Prisma.PrismaPromise<GetSparkRunAggregateType<T>>

    /**
     * Group by SparkRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkRunGroupByArgs} args - Group by arguments.
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
      T extends SparkRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SparkRunGroupByArgs['orderBy'] }
        : { orderBy?: SparkRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SparkRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSparkRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SparkRun model
   */
  readonly fields: SparkRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SparkRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SparkRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spark<T extends SparkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SparkDefaultArgs<ExtArgs>>): Prisma__SparkClient<$Result.GetResult<Prisma.$SparkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    SparkRunOutbox<T extends SparkRun$SparkRunOutboxArgs<ExtArgs> = {}>(args?: Subset<T, SparkRun$SparkRunOutboxArgs<ExtArgs>>): Prisma__SparkRunOutboxClient<$Result.GetResult<Prisma.$SparkRunOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SparkRun model
   */
  interface SparkRunFieldRefs {
    readonly id: FieldRef<"SparkRun", 'String'>
    readonly sparkId: FieldRef<"SparkRun", 'String'>
    readonly metadata: FieldRef<"SparkRun", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * SparkRun findUnique
   */
  export type SparkRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRun
     */
    select?: SparkRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRun
     */
    omit?: SparkRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunInclude<ExtArgs> | null
    /**
     * Filter, which SparkRun to fetch.
     */
    where: SparkRunWhereUniqueInput
  }

  /**
   * SparkRun findUniqueOrThrow
   */
  export type SparkRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRun
     */
    select?: SparkRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRun
     */
    omit?: SparkRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunInclude<ExtArgs> | null
    /**
     * Filter, which SparkRun to fetch.
     */
    where: SparkRunWhereUniqueInput
  }

  /**
   * SparkRun findFirst
   */
  export type SparkRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRun
     */
    select?: SparkRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRun
     */
    omit?: SparkRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunInclude<ExtArgs> | null
    /**
     * Filter, which SparkRun to fetch.
     */
    where?: SparkRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SparkRuns to fetch.
     */
    orderBy?: SparkRunOrderByWithRelationInput | SparkRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SparkRuns.
     */
    cursor?: SparkRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SparkRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SparkRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SparkRuns.
     */
    distinct?: SparkRunScalarFieldEnum | SparkRunScalarFieldEnum[]
  }

  /**
   * SparkRun findFirstOrThrow
   */
  export type SparkRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRun
     */
    select?: SparkRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRun
     */
    omit?: SparkRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunInclude<ExtArgs> | null
    /**
     * Filter, which SparkRun to fetch.
     */
    where?: SparkRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SparkRuns to fetch.
     */
    orderBy?: SparkRunOrderByWithRelationInput | SparkRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SparkRuns.
     */
    cursor?: SparkRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SparkRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SparkRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SparkRuns.
     */
    distinct?: SparkRunScalarFieldEnum | SparkRunScalarFieldEnum[]
  }

  /**
   * SparkRun findMany
   */
  export type SparkRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRun
     */
    select?: SparkRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRun
     */
    omit?: SparkRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunInclude<ExtArgs> | null
    /**
     * Filter, which SparkRuns to fetch.
     */
    where?: SparkRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SparkRuns to fetch.
     */
    orderBy?: SparkRunOrderByWithRelationInput | SparkRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SparkRuns.
     */
    cursor?: SparkRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SparkRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SparkRuns.
     */
    skip?: number
    distinct?: SparkRunScalarFieldEnum | SparkRunScalarFieldEnum[]
  }

  /**
   * SparkRun create
   */
  export type SparkRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRun
     */
    select?: SparkRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRun
     */
    omit?: SparkRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunInclude<ExtArgs> | null
    /**
     * The data needed to create a SparkRun.
     */
    data: XOR<SparkRunCreateInput, SparkRunUncheckedCreateInput>
  }

  /**
   * SparkRun createMany
   */
  export type SparkRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SparkRuns.
     */
    data: SparkRunCreateManyInput | SparkRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SparkRun createManyAndReturn
   */
  export type SparkRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRun
     */
    select?: SparkRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRun
     */
    omit?: SparkRunOmit<ExtArgs> | null
    /**
     * The data used to create many SparkRuns.
     */
    data: SparkRunCreateManyInput | SparkRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SparkRun update
   */
  export type SparkRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRun
     */
    select?: SparkRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRun
     */
    omit?: SparkRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunInclude<ExtArgs> | null
    /**
     * The data needed to update a SparkRun.
     */
    data: XOR<SparkRunUpdateInput, SparkRunUncheckedUpdateInput>
    /**
     * Choose, which SparkRun to update.
     */
    where: SparkRunWhereUniqueInput
  }

  /**
   * SparkRun updateMany
   */
  export type SparkRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SparkRuns.
     */
    data: XOR<SparkRunUpdateManyMutationInput, SparkRunUncheckedUpdateManyInput>
    /**
     * Filter which SparkRuns to update
     */
    where?: SparkRunWhereInput
    /**
     * Limit how many SparkRuns to update.
     */
    limit?: number
  }

  /**
   * SparkRun updateManyAndReturn
   */
  export type SparkRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRun
     */
    select?: SparkRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRun
     */
    omit?: SparkRunOmit<ExtArgs> | null
    /**
     * The data used to update SparkRuns.
     */
    data: XOR<SparkRunUpdateManyMutationInput, SparkRunUncheckedUpdateManyInput>
    /**
     * Filter which SparkRuns to update
     */
    where?: SparkRunWhereInput
    /**
     * Limit how many SparkRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SparkRun upsert
   */
  export type SparkRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRun
     */
    select?: SparkRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRun
     */
    omit?: SparkRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunInclude<ExtArgs> | null
    /**
     * The filter to search for the SparkRun to update in case it exists.
     */
    where: SparkRunWhereUniqueInput
    /**
     * In case the SparkRun found by the `where` argument doesn't exist, create a new SparkRun with this data.
     */
    create: XOR<SparkRunCreateInput, SparkRunUncheckedCreateInput>
    /**
     * In case the SparkRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SparkRunUpdateInput, SparkRunUncheckedUpdateInput>
  }

  /**
   * SparkRun delete
   */
  export type SparkRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRun
     */
    select?: SparkRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRun
     */
    omit?: SparkRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunInclude<ExtArgs> | null
    /**
     * Filter which SparkRun to delete.
     */
    where: SparkRunWhereUniqueInput
  }

  /**
   * SparkRun deleteMany
   */
  export type SparkRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SparkRuns to delete
     */
    where?: SparkRunWhereInput
    /**
     * Limit how many SparkRuns to delete.
     */
    limit?: number
  }

  /**
   * SparkRun.SparkRunOutbox
   */
  export type SparkRun$SparkRunOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRunOutbox
     */
    select?: SparkRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRunOutbox
     */
    omit?: SparkRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunOutboxInclude<ExtArgs> | null
    where?: SparkRunOutboxWhereInput
  }

  /**
   * SparkRun without action
   */
  export type SparkRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRun
     */
    select?: SparkRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRun
     */
    omit?: SparkRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunInclude<ExtArgs> | null
  }


  /**
   * Model SparkRunOutbox
   */

  export type AggregateSparkRunOutbox = {
    _count: SparkRunOutboxCountAggregateOutputType | null
    _min: SparkRunOutboxMinAggregateOutputType | null
    _max: SparkRunOutboxMaxAggregateOutputType | null
  }

  export type SparkRunOutboxMinAggregateOutputType = {
    id: string | null
    sparkRunId: string | null
  }

  export type SparkRunOutboxMaxAggregateOutputType = {
    id: string | null
    sparkRunId: string | null
  }

  export type SparkRunOutboxCountAggregateOutputType = {
    id: number
    sparkRunId: number
    _all: number
  }


  export type SparkRunOutboxMinAggregateInputType = {
    id?: true
    sparkRunId?: true
  }

  export type SparkRunOutboxMaxAggregateInputType = {
    id?: true
    sparkRunId?: true
  }

  export type SparkRunOutboxCountAggregateInputType = {
    id?: true
    sparkRunId?: true
    _all?: true
  }

  export type SparkRunOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SparkRunOutbox to aggregate.
     */
    where?: SparkRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SparkRunOutboxes to fetch.
     */
    orderBy?: SparkRunOutboxOrderByWithRelationInput | SparkRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SparkRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SparkRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SparkRunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SparkRunOutboxes
    **/
    _count?: true | SparkRunOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SparkRunOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SparkRunOutboxMaxAggregateInputType
  }

  export type GetSparkRunOutboxAggregateType<T extends SparkRunOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateSparkRunOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSparkRunOutbox[P]>
      : GetScalarType<T[P], AggregateSparkRunOutbox[P]>
  }




  export type SparkRunOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SparkRunOutboxWhereInput
    orderBy?: SparkRunOutboxOrderByWithAggregationInput | SparkRunOutboxOrderByWithAggregationInput[]
    by: SparkRunOutboxScalarFieldEnum[] | SparkRunOutboxScalarFieldEnum
    having?: SparkRunOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SparkRunOutboxCountAggregateInputType | true
    _min?: SparkRunOutboxMinAggregateInputType
    _max?: SparkRunOutboxMaxAggregateInputType
  }

  export type SparkRunOutboxGroupByOutputType = {
    id: string
    sparkRunId: string
    _count: SparkRunOutboxCountAggregateOutputType | null
    _min: SparkRunOutboxMinAggregateOutputType | null
    _max: SparkRunOutboxMaxAggregateOutputType | null
  }

  type GetSparkRunOutboxGroupByPayload<T extends SparkRunOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SparkRunOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SparkRunOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SparkRunOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], SparkRunOutboxGroupByOutputType[P]>
        }
      >
    >


  export type SparkRunOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sparkRunId?: boolean
    sparkRun?: boolean | SparkRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sparkRunOutbox"]>

  export type SparkRunOutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sparkRunId?: boolean
    sparkRun?: boolean | SparkRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sparkRunOutbox"]>

  export type SparkRunOutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sparkRunId?: boolean
    sparkRun?: boolean | SparkRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sparkRunOutbox"]>

  export type SparkRunOutboxSelectScalar = {
    id?: boolean
    sparkRunId?: boolean
  }

  export type SparkRunOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sparkRunId", ExtArgs["result"]["sparkRunOutbox"]>
  export type SparkRunOutboxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sparkRun?: boolean | SparkRunDefaultArgs<ExtArgs>
  }
  export type SparkRunOutboxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sparkRun?: boolean | SparkRunDefaultArgs<ExtArgs>
  }
  export type SparkRunOutboxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sparkRun?: boolean | SparkRunDefaultArgs<ExtArgs>
  }

  export type $SparkRunOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SparkRunOutbox"
    objects: {
      sparkRun: Prisma.$SparkRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sparkRunId: string
    }, ExtArgs["result"]["sparkRunOutbox"]>
    composites: {}
  }

  type SparkRunOutboxGetPayload<S extends boolean | null | undefined | SparkRunOutboxDefaultArgs> = $Result.GetResult<Prisma.$SparkRunOutboxPayload, S>

  type SparkRunOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SparkRunOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SparkRunOutboxCountAggregateInputType | true
    }

  export interface SparkRunOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SparkRunOutbox'], meta: { name: 'SparkRunOutbox' } }
    /**
     * Find zero or one SparkRunOutbox that matches the filter.
     * @param {SparkRunOutboxFindUniqueArgs} args - Arguments to find a SparkRunOutbox
     * @example
     * // Get one SparkRunOutbox
     * const sparkRunOutbox = await prisma.sparkRunOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SparkRunOutboxFindUniqueArgs>(args: SelectSubset<T, SparkRunOutboxFindUniqueArgs<ExtArgs>>): Prisma__SparkRunOutboxClient<$Result.GetResult<Prisma.$SparkRunOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SparkRunOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SparkRunOutboxFindUniqueOrThrowArgs} args - Arguments to find a SparkRunOutbox
     * @example
     * // Get one SparkRunOutbox
     * const sparkRunOutbox = await prisma.sparkRunOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SparkRunOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, SparkRunOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SparkRunOutboxClient<$Result.GetResult<Prisma.$SparkRunOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SparkRunOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkRunOutboxFindFirstArgs} args - Arguments to find a SparkRunOutbox
     * @example
     * // Get one SparkRunOutbox
     * const sparkRunOutbox = await prisma.sparkRunOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SparkRunOutboxFindFirstArgs>(args?: SelectSubset<T, SparkRunOutboxFindFirstArgs<ExtArgs>>): Prisma__SparkRunOutboxClient<$Result.GetResult<Prisma.$SparkRunOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SparkRunOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkRunOutboxFindFirstOrThrowArgs} args - Arguments to find a SparkRunOutbox
     * @example
     * // Get one SparkRunOutbox
     * const sparkRunOutbox = await prisma.sparkRunOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SparkRunOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, SparkRunOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__SparkRunOutboxClient<$Result.GetResult<Prisma.$SparkRunOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SparkRunOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkRunOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SparkRunOutboxes
     * const sparkRunOutboxes = await prisma.sparkRunOutbox.findMany()
     * 
     * // Get first 10 SparkRunOutboxes
     * const sparkRunOutboxes = await prisma.sparkRunOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sparkRunOutboxWithIdOnly = await prisma.sparkRunOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SparkRunOutboxFindManyArgs>(args?: SelectSubset<T, SparkRunOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparkRunOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SparkRunOutbox.
     * @param {SparkRunOutboxCreateArgs} args - Arguments to create a SparkRunOutbox.
     * @example
     * // Create one SparkRunOutbox
     * const SparkRunOutbox = await prisma.sparkRunOutbox.create({
     *   data: {
     *     // ... data to create a SparkRunOutbox
     *   }
     * })
     * 
     */
    create<T extends SparkRunOutboxCreateArgs>(args: SelectSubset<T, SparkRunOutboxCreateArgs<ExtArgs>>): Prisma__SparkRunOutboxClient<$Result.GetResult<Prisma.$SparkRunOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SparkRunOutboxes.
     * @param {SparkRunOutboxCreateManyArgs} args - Arguments to create many SparkRunOutboxes.
     * @example
     * // Create many SparkRunOutboxes
     * const sparkRunOutbox = await prisma.sparkRunOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SparkRunOutboxCreateManyArgs>(args?: SelectSubset<T, SparkRunOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SparkRunOutboxes and returns the data saved in the database.
     * @param {SparkRunOutboxCreateManyAndReturnArgs} args - Arguments to create many SparkRunOutboxes.
     * @example
     * // Create many SparkRunOutboxes
     * const sparkRunOutbox = await prisma.sparkRunOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SparkRunOutboxes and only return the `id`
     * const sparkRunOutboxWithIdOnly = await prisma.sparkRunOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SparkRunOutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, SparkRunOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparkRunOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SparkRunOutbox.
     * @param {SparkRunOutboxDeleteArgs} args - Arguments to delete one SparkRunOutbox.
     * @example
     * // Delete one SparkRunOutbox
     * const SparkRunOutbox = await prisma.sparkRunOutbox.delete({
     *   where: {
     *     // ... filter to delete one SparkRunOutbox
     *   }
     * })
     * 
     */
    delete<T extends SparkRunOutboxDeleteArgs>(args: SelectSubset<T, SparkRunOutboxDeleteArgs<ExtArgs>>): Prisma__SparkRunOutboxClient<$Result.GetResult<Prisma.$SparkRunOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SparkRunOutbox.
     * @param {SparkRunOutboxUpdateArgs} args - Arguments to update one SparkRunOutbox.
     * @example
     * // Update one SparkRunOutbox
     * const sparkRunOutbox = await prisma.sparkRunOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SparkRunOutboxUpdateArgs>(args: SelectSubset<T, SparkRunOutboxUpdateArgs<ExtArgs>>): Prisma__SparkRunOutboxClient<$Result.GetResult<Prisma.$SparkRunOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SparkRunOutboxes.
     * @param {SparkRunOutboxDeleteManyArgs} args - Arguments to filter SparkRunOutboxes to delete.
     * @example
     * // Delete a few SparkRunOutboxes
     * const { count } = await prisma.sparkRunOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SparkRunOutboxDeleteManyArgs>(args?: SelectSubset<T, SparkRunOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SparkRunOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkRunOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SparkRunOutboxes
     * const sparkRunOutbox = await prisma.sparkRunOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SparkRunOutboxUpdateManyArgs>(args: SelectSubset<T, SparkRunOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SparkRunOutboxes and returns the data updated in the database.
     * @param {SparkRunOutboxUpdateManyAndReturnArgs} args - Arguments to update many SparkRunOutboxes.
     * @example
     * // Update many SparkRunOutboxes
     * const sparkRunOutbox = await prisma.sparkRunOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SparkRunOutboxes and only return the `id`
     * const sparkRunOutboxWithIdOnly = await prisma.sparkRunOutbox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SparkRunOutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, SparkRunOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparkRunOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SparkRunOutbox.
     * @param {SparkRunOutboxUpsertArgs} args - Arguments to update or create a SparkRunOutbox.
     * @example
     * // Update or create a SparkRunOutbox
     * const sparkRunOutbox = await prisma.sparkRunOutbox.upsert({
     *   create: {
     *     // ... data to create a SparkRunOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SparkRunOutbox we want to update
     *   }
     * })
     */
    upsert<T extends SparkRunOutboxUpsertArgs>(args: SelectSubset<T, SparkRunOutboxUpsertArgs<ExtArgs>>): Prisma__SparkRunOutboxClient<$Result.GetResult<Prisma.$SparkRunOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SparkRunOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkRunOutboxCountArgs} args - Arguments to filter SparkRunOutboxes to count.
     * @example
     * // Count the number of SparkRunOutboxes
     * const count = await prisma.sparkRunOutbox.count({
     *   where: {
     *     // ... the filter for the SparkRunOutboxes we want to count
     *   }
     * })
    **/
    count<T extends SparkRunOutboxCountArgs>(
      args?: Subset<T, SparkRunOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SparkRunOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SparkRunOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkRunOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SparkRunOutboxAggregateArgs>(args: Subset<T, SparkRunOutboxAggregateArgs>): Prisma.PrismaPromise<GetSparkRunOutboxAggregateType<T>>

    /**
     * Group by SparkRunOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparkRunOutboxGroupByArgs} args - Group by arguments.
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
      T extends SparkRunOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SparkRunOutboxGroupByArgs['orderBy'] }
        : { orderBy?: SparkRunOutboxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SparkRunOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSparkRunOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SparkRunOutbox model
   */
  readonly fields: SparkRunOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SparkRunOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SparkRunOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sparkRun<T extends SparkRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SparkRunDefaultArgs<ExtArgs>>): Prisma__SparkRunClient<$Result.GetResult<Prisma.$SparkRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SparkRunOutbox model
   */
  interface SparkRunOutboxFieldRefs {
    readonly id: FieldRef<"SparkRunOutbox", 'String'>
    readonly sparkRunId: FieldRef<"SparkRunOutbox", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SparkRunOutbox findUnique
   */
  export type SparkRunOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRunOutbox
     */
    select?: SparkRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRunOutbox
     */
    omit?: SparkRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which SparkRunOutbox to fetch.
     */
    where: SparkRunOutboxWhereUniqueInput
  }

  /**
   * SparkRunOutbox findUniqueOrThrow
   */
  export type SparkRunOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRunOutbox
     */
    select?: SparkRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRunOutbox
     */
    omit?: SparkRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which SparkRunOutbox to fetch.
     */
    where: SparkRunOutboxWhereUniqueInput
  }

  /**
   * SparkRunOutbox findFirst
   */
  export type SparkRunOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRunOutbox
     */
    select?: SparkRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRunOutbox
     */
    omit?: SparkRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which SparkRunOutbox to fetch.
     */
    where?: SparkRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SparkRunOutboxes to fetch.
     */
    orderBy?: SparkRunOutboxOrderByWithRelationInput | SparkRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SparkRunOutboxes.
     */
    cursor?: SparkRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SparkRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SparkRunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SparkRunOutboxes.
     */
    distinct?: SparkRunOutboxScalarFieldEnum | SparkRunOutboxScalarFieldEnum[]
  }

  /**
   * SparkRunOutbox findFirstOrThrow
   */
  export type SparkRunOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRunOutbox
     */
    select?: SparkRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRunOutbox
     */
    omit?: SparkRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which SparkRunOutbox to fetch.
     */
    where?: SparkRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SparkRunOutboxes to fetch.
     */
    orderBy?: SparkRunOutboxOrderByWithRelationInput | SparkRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SparkRunOutboxes.
     */
    cursor?: SparkRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SparkRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SparkRunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SparkRunOutboxes.
     */
    distinct?: SparkRunOutboxScalarFieldEnum | SparkRunOutboxScalarFieldEnum[]
  }

  /**
   * SparkRunOutbox findMany
   */
  export type SparkRunOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRunOutbox
     */
    select?: SparkRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRunOutbox
     */
    omit?: SparkRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which SparkRunOutboxes to fetch.
     */
    where?: SparkRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SparkRunOutboxes to fetch.
     */
    orderBy?: SparkRunOutboxOrderByWithRelationInput | SparkRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SparkRunOutboxes.
     */
    cursor?: SparkRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SparkRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SparkRunOutboxes.
     */
    skip?: number
    distinct?: SparkRunOutboxScalarFieldEnum | SparkRunOutboxScalarFieldEnum[]
  }

  /**
   * SparkRunOutbox create
   */
  export type SparkRunOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRunOutbox
     */
    select?: SparkRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRunOutbox
     */
    omit?: SparkRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunOutboxInclude<ExtArgs> | null
    /**
     * The data needed to create a SparkRunOutbox.
     */
    data: XOR<SparkRunOutboxCreateInput, SparkRunOutboxUncheckedCreateInput>
  }

  /**
   * SparkRunOutbox createMany
   */
  export type SparkRunOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SparkRunOutboxes.
     */
    data: SparkRunOutboxCreateManyInput | SparkRunOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SparkRunOutbox createManyAndReturn
   */
  export type SparkRunOutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRunOutbox
     */
    select?: SparkRunOutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRunOutbox
     */
    omit?: SparkRunOutboxOmit<ExtArgs> | null
    /**
     * The data used to create many SparkRunOutboxes.
     */
    data: SparkRunOutboxCreateManyInput | SparkRunOutboxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunOutboxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SparkRunOutbox update
   */
  export type SparkRunOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRunOutbox
     */
    select?: SparkRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRunOutbox
     */
    omit?: SparkRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunOutboxInclude<ExtArgs> | null
    /**
     * The data needed to update a SparkRunOutbox.
     */
    data: XOR<SparkRunOutboxUpdateInput, SparkRunOutboxUncheckedUpdateInput>
    /**
     * Choose, which SparkRunOutbox to update.
     */
    where: SparkRunOutboxWhereUniqueInput
  }

  /**
   * SparkRunOutbox updateMany
   */
  export type SparkRunOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SparkRunOutboxes.
     */
    data: XOR<SparkRunOutboxUpdateManyMutationInput, SparkRunOutboxUncheckedUpdateManyInput>
    /**
     * Filter which SparkRunOutboxes to update
     */
    where?: SparkRunOutboxWhereInput
    /**
     * Limit how many SparkRunOutboxes to update.
     */
    limit?: number
  }

  /**
   * SparkRunOutbox updateManyAndReturn
   */
  export type SparkRunOutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRunOutbox
     */
    select?: SparkRunOutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRunOutbox
     */
    omit?: SparkRunOutboxOmit<ExtArgs> | null
    /**
     * The data used to update SparkRunOutboxes.
     */
    data: XOR<SparkRunOutboxUpdateManyMutationInput, SparkRunOutboxUncheckedUpdateManyInput>
    /**
     * Filter which SparkRunOutboxes to update
     */
    where?: SparkRunOutboxWhereInput
    /**
     * Limit how many SparkRunOutboxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunOutboxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SparkRunOutbox upsert
   */
  export type SparkRunOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRunOutbox
     */
    select?: SparkRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRunOutbox
     */
    omit?: SparkRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunOutboxInclude<ExtArgs> | null
    /**
     * The filter to search for the SparkRunOutbox to update in case it exists.
     */
    where: SparkRunOutboxWhereUniqueInput
    /**
     * In case the SparkRunOutbox found by the `where` argument doesn't exist, create a new SparkRunOutbox with this data.
     */
    create: XOR<SparkRunOutboxCreateInput, SparkRunOutboxUncheckedCreateInput>
    /**
     * In case the SparkRunOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SparkRunOutboxUpdateInput, SparkRunOutboxUncheckedUpdateInput>
  }

  /**
   * SparkRunOutbox delete
   */
  export type SparkRunOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRunOutbox
     */
    select?: SparkRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRunOutbox
     */
    omit?: SparkRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunOutboxInclude<ExtArgs> | null
    /**
     * Filter which SparkRunOutbox to delete.
     */
    where: SparkRunOutboxWhereUniqueInput
  }

  /**
   * SparkRunOutbox deleteMany
   */
  export type SparkRunOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SparkRunOutboxes to delete
     */
    where?: SparkRunOutboxWhereInput
    /**
     * Limit how many SparkRunOutboxes to delete.
     */
    limit?: number
  }

  /**
   * SparkRunOutbox without action
   */
  export type SparkRunOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparkRunOutbox
     */
    select?: SparkRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparkRunOutbox
     */
    omit?: SparkRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparkRunOutboxInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SparkScalarFieldEnum: {
    id: 'id',
    triggerId: 'triggerId'
  };

  export type SparkScalarFieldEnum = (typeof SparkScalarFieldEnum)[keyof typeof SparkScalarFieldEnum]


  export const TriggerScalarFieldEnum: {
    id: 'id',
    sparkId: 'sparkId',
    triggerId: 'triggerId'
  };

  export type TriggerScalarFieldEnum = (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum]


  export const AvailableTriggersScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AvailableTriggersScalarFieldEnum = (typeof AvailableTriggersScalarFieldEnum)[keyof typeof AvailableTriggersScalarFieldEnum]


  export const ActionScalarFieldEnum: {
    id: 'id',
    sparkId: 'sparkId',
    actionId: 'actionId',
    sortingOrder: 'sortingOrder'
  };

  export type ActionScalarFieldEnum = (typeof ActionScalarFieldEnum)[keyof typeof ActionScalarFieldEnum]


  export const AvailableActionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AvailableActionScalarFieldEnum = (typeof AvailableActionScalarFieldEnum)[keyof typeof AvailableActionScalarFieldEnum]


  export const SparkRunScalarFieldEnum: {
    id: 'id',
    sparkId: 'sparkId',
    metadata: 'metadata'
  };

  export type SparkRunScalarFieldEnum = (typeof SparkRunScalarFieldEnum)[keyof typeof SparkRunScalarFieldEnum]


  export const SparkRunOutboxScalarFieldEnum: {
    id: 'id',
    sparkRunId: 'sparkRunId'
  };

  export type SparkRunOutboxScalarFieldEnum = (typeof SparkRunOutboxScalarFieldEnum)[keyof typeof SparkRunOutboxScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type SparkWhereInput = {
    AND?: SparkWhereInput | SparkWhereInput[]
    OR?: SparkWhereInput[]
    NOT?: SparkWhereInput | SparkWhereInput[]
    id?: StringFilter<"Spark"> | string
    triggerId?: StringFilter<"Spark"> | string
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    actions?: ActionListRelationFilter
    SparkRun?: SparkRunListRelationFilter
  }

  export type SparkOrderByWithRelationInput = {
    id?: SortOrder
    triggerId?: SortOrder
    trigger?: TriggerOrderByWithRelationInput
    actions?: ActionOrderByRelationAggregateInput
    SparkRun?: SparkRunOrderByRelationAggregateInput
  }

  export type SparkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SparkWhereInput | SparkWhereInput[]
    OR?: SparkWhereInput[]
    NOT?: SparkWhereInput | SparkWhereInput[]
    triggerId?: StringFilter<"Spark"> | string
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    actions?: ActionListRelationFilter
    SparkRun?: SparkRunListRelationFilter
  }, "id">

  export type SparkOrderByWithAggregationInput = {
    id?: SortOrder
    triggerId?: SortOrder
    _count?: SparkCountOrderByAggregateInput
    _max?: SparkMaxOrderByAggregateInput
    _min?: SparkMinOrderByAggregateInput
  }

  export type SparkScalarWhereWithAggregatesInput = {
    AND?: SparkScalarWhereWithAggregatesInput | SparkScalarWhereWithAggregatesInput[]
    OR?: SparkScalarWhereWithAggregatesInput[]
    NOT?: SparkScalarWhereWithAggregatesInput | SparkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Spark"> | string
    triggerId?: StringWithAggregatesFilter<"Spark"> | string
  }

  export type TriggerWhereInput = {
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    id?: StringFilter<"Trigger"> | string
    sparkId?: StringFilter<"Trigger"> | string
    triggerId?: StringFilter<"Trigger"> | string
    type?: XOR<AvailableTriggersScalarRelationFilter, AvailableTriggersWhereInput>
    spark?: XOR<SparkScalarRelationFilter, SparkWhereInput>
  }

  export type TriggerOrderByWithRelationInput = {
    id?: SortOrder
    sparkId?: SortOrder
    triggerId?: SortOrder
    type?: AvailableTriggersOrderByWithRelationInput
    spark?: SparkOrderByWithRelationInput
  }

  export type TriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sparkId?: string
    triggerId?: string
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    type?: XOR<AvailableTriggersScalarRelationFilter, AvailableTriggersWhereInput>
    spark?: XOR<SparkScalarRelationFilter, SparkWhereInput>
  }, "id" | "sparkId" | "triggerId">

  export type TriggerOrderByWithAggregationInput = {
    id?: SortOrder
    sparkId?: SortOrder
    triggerId?: SortOrder
    _count?: TriggerCountOrderByAggregateInput
    _max?: TriggerMaxOrderByAggregateInput
    _min?: TriggerMinOrderByAggregateInput
  }

  export type TriggerScalarWhereWithAggregatesInput = {
    AND?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    OR?: TriggerScalarWhereWithAggregatesInput[]
    NOT?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trigger"> | string
    sparkId?: StringWithAggregatesFilter<"Trigger"> | string
    triggerId?: StringWithAggregatesFilter<"Trigger"> | string
  }

  export type AvailableTriggersWhereInput = {
    AND?: AvailableTriggersWhereInput | AvailableTriggersWhereInput[]
    OR?: AvailableTriggersWhereInput[]
    NOT?: AvailableTriggersWhereInput | AvailableTriggersWhereInput[]
    id?: StringFilter<"AvailableTriggers"> | string
    name?: StringFilter<"AvailableTriggers"> | string
    triggers?: TriggerListRelationFilter
  }

  export type AvailableTriggersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    triggers?: TriggerOrderByRelationAggregateInput
  }

  export type AvailableTriggersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailableTriggersWhereInput | AvailableTriggersWhereInput[]
    OR?: AvailableTriggersWhereInput[]
    NOT?: AvailableTriggersWhereInput | AvailableTriggersWhereInput[]
    name?: StringFilter<"AvailableTriggers"> | string
    triggers?: TriggerListRelationFilter
  }, "id">

  export type AvailableTriggersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AvailableTriggersCountOrderByAggregateInput
    _max?: AvailableTriggersMaxOrderByAggregateInput
    _min?: AvailableTriggersMinOrderByAggregateInput
  }

  export type AvailableTriggersScalarWhereWithAggregatesInput = {
    AND?: AvailableTriggersScalarWhereWithAggregatesInput | AvailableTriggersScalarWhereWithAggregatesInput[]
    OR?: AvailableTriggersScalarWhereWithAggregatesInput[]
    NOT?: AvailableTriggersScalarWhereWithAggregatesInput | AvailableTriggersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableTriggers"> | string
    name?: StringWithAggregatesFilter<"AvailableTriggers"> | string
  }

  export type ActionWhereInput = {
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    id?: StringFilter<"Action"> | string
    sparkId?: StringFilter<"Action"> | string
    actionId?: StringFilter<"Action"> | string
    sortingOrder?: IntFilter<"Action"> | number
    spark?: XOR<SparkScalarRelationFilter, SparkWhereInput>
    type?: XOR<AvailableActionScalarRelationFilter, AvailableActionWhereInput>
  }

  export type ActionOrderByWithRelationInput = {
    id?: SortOrder
    sparkId?: SortOrder
    actionId?: SortOrder
    sortingOrder?: SortOrder
    spark?: SparkOrderByWithRelationInput
    type?: AvailableActionOrderByWithRelationInput
  }

  export type ActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    sparkId?: StringFilter<"Action"> | string
    actionId?: StringFilter<"Action"> | string
    sortingOrder?: IntFilter<"Action"> | number
    spark?: XOR<SparkScalarRelationFilter, SparkWhereInput>
    type?: XOR<AvailableActionScalarRelationFilter, AvailableActionWhereInput>
  }, "id">

  export type ActionOrderByWithAggregationInput = {
    id?: SortOrder
    sparkId?: SortOrder
    actionId?: SortOrder
    sortingOrder?: SortOrder
    _count?: ActionCountOrderByAggregateInput
    _avg?: ActionAvgOrderByAggregateInput
    _max?: ActionMaxOrderByAggregateInput
    _min?: ActionMinOrderByAggregateInput
    _sum?: ActionSumOrderByAggregateInput
  }

  export type ActionScalarWhereWithAggregatesInput = {
    AND?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    OR?: ActionScalarWhereWithAggregatesInput[]
    NOT?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Action"> | string
    sparkId?: StringWithAggregatesFilter<"Action"> | string
    actionId?: StringWithAggregatesFilter<"Action"> | string
    sortingOrder?: IntWithAggregatesFilter<"Action"> | number
  }

  export type AvailableActionWhereInput = {
    AND?: AvailableActionWhereInput | AvailableActionWhereInput[]
    OR?: AvailableActionWhereInput[]
    NOT?: AvailableActionWhereInput | AvailableActionWhereInput[]
    id?: StringFilter<"AvailableAction"> | string
    name?: StringFilter<"AvailableAction"> | string
    actions?: ActionListRelationFilter
  }

  export type AvailableActionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    actions?: ActionOrderByRelationAggregateInput
  }

  export type AvailableActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailableActionWhereInput | AvailableActionWhereInput[]
    OR?: AvailableActionWhereInput[]
    NOT?: AvailableActionWhereInput | AvailableActionWhereInput[]
    name?: StringFilter<"AvailableAction"> | string
    actions?: ActionListRelationFilter
  }, "id">

  export type AvailableActionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AvailableActionCountOrderByAggregateInput
    _max?: AvailableActionMaxOrderByAggregateInput
    _min?: AvailableActionMinOrderByAggregateInput
  }

  export type AvailableActionScalarWhereWithAggregatesInput = {
    AND?: AvailableActionScalarWhereWithAggregatesInput | AvailableActionScalarWhereWithAggregatesInput[]
    OR?: AvailableActionScalarWhereWithAggregatesInput[]
    NOT?: AvailableActionScalarWhereWithAggregatesInput | AvailableActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableAction"> | string
    name?: StringWithAggregatesFilter<"AvailableAction"> | string
  }

  export type SparkRunWhereInput = {
    AND?: SparkRunWhereInput | SparkRunWhereInput[]
    OR?: SparkRunWhereInput[]
    NOT?: SparkRunWhereInput | SparkRunWhereInput[]
    id?: StringFilter<"SparkRun"> | string
    sparkId?: StringFilter<"SparkRun"> | string
    metadata?: JsonFilter<"SparkRun">
    spark?: XOR<SparkScalarRelationFilter, SparkWhereInput>
    SparkRunOutbox?: XOR<SparkRunOutboxNullableScalarRelationFilter, SparkRunOutboxWhereInput> | null
  }

  export type SparkRunOrderByWithRelationInput = {
    id?: SortOrder
    sparkId?: SortOrder
    metadata?: SortOrder
    spark?: SparkOrderByWithRelationInput
    SparkRunOutbox?: SparkRunOutboxOrderByWithRelationInput
  }

  export type SparkRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SparkRunWhereInput | SparkRunWhereInput[]
    OR?: SparkRunWhereInput[]
    NOT?: SparkRunWhereInput | SparkRunWhereInput[]
    sparkId?: StringFilter<"SparkRun"> | string
    metadata?: JsonFilter<"SparkRun">
    spark?: XOR<SparkScalarRelationFilter, SparkWhereInput>
    SparkRunOutbox?: XOR<SparkRunOutboxNullableScalarRelationFilter, SparkRunOutboxWhereInput> | null
  }, "id">

  export type SparkRunOrderByWithAggregationInput = {
    id?: SortOrder
    sparkId?: SortOrder
    metadata?: SortOrder
    _count?: SparkRunCountOrderByAggregateInput
    _max?: SparkRunMaxOrderByAggregateInput
    _min?: SparkRunMinOrderByAggregateInput
  }

  export type SparkRunScalarWhereWithAggregatesInput = {
    AND?: SparkRunScalarWhereWithAggregatesInput | SparkRunScalarWhereWithAggregatesInput[]
    OR?: SparkRunScalarWhereWithAggregatesInput[]
    NOT?: SparkRunScalarWhereWithAggregatesInput | SparkRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SparkRun"> | string
    sparkId?: StringWithAggregatesFilter<"SparkRun"> | string
    metadata?: JsonWithAggregatesFilter<"SparkRun">
  }

  export type SparkRunOutboxWhereInput = {
    AND?: SparkRunOutboxWhereInput | SparkRunOutboxWhereInput[]
    OR?: SparkRunOutboxWhereInput[]
    NOT?: SparkRunOutboxWhereInput | SparkRunOutboxWhereInput[]
    id?: StringFilter<"SparkRunOutbox"> | string
    sparkRunId?: StringFilter<"SparkRunOutbox"> | string
    sparkRun?: XOR<SparkRunScalarRelationFilter, SparkRunWhereInput>
  }

  export type SparkRunOutboxOrderByWithRelationInput = {
    id?: SortOrder
    sparkRunId?: SortOrder
    sparkRun?: SparkRunOrderByWithRelationInput
  }

  export type SparkRunOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sparkRunId?: string
    AND?: SparkRunOutboxWhereInput | SparkRunOutboxWhereInput[]
    OR?: SparkRunOutboxWhereInput[]
    NOT?: SparkRunOutboxWhereInput | SparkRunOutboxWhereInput[]
    sparkRun?: XOR<SparkRunScalarRelationFilter, SparkRunWhereInput>
  }, "id" | "sparkRunId">

  export type SparkRunOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    sparkRunId?: SortOrder
    _count?: SparkRunOutboxCountOrderByAggregateInput
    _max?: SparkRunOutboxMaxOrderByAggregateInput
    _min?: SparkRunOutboxMinOrderByAggregateInput
  }

  export type SparkRunOutboxScalarWhereWithAggregatesInput = {
    AND?: SparkRunOutboxScalarWhereWithAggregatesInput | SparkRunOutboxScalarWhereWithAggregatesInput[]
    OR?: SparkRunOutboxScalarWhereWithAggregatesInput[]
    NOT?: SparkRunOutboxScalarWhereWithAggregatesInput | SparkRunOutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SparkRunOutbox"> | string
    sparkRunId?: StringWithAggregatesFilter<"SparkRunOutbox"> | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type SparkCreateInput = {
    id?: string
    triggerId: string
    trigger?: TriggerCreateNestedOneWithoutSparkInput
    actions?: ActionCreateNestedManyWithoutSparkInput
    SparkRun?: SparkRunCreateNestedManyWithoutSparkInput
  }

  export type SparkUncheckedCreateInput = {
    id?: string
    triggerId: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutSparkInput
    actions?: ActionUncheckedCreateNestedManyWithoutSparkInput
    SparkRun?: SparkRunUncheckedCreateNestedManyWithoutSparkInput
  }

  export type SparkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutSparkNestedInput
    actions?: ActionUpdateManyWithoutSparkNestedInput
    SparkRun?: SparkRunUpdateManyWithoutSparkNestedInput
  }

  export type SparkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutSparkNestedInput
    actions?: ActionUncheckedUpdateManyWithoutSparkNestedInput
    SparkRun?: SparkRunUncheckedUpdateManyWithoutSparkNestedInput
  }

  export type SparkCreateManyInput = {
    id?: string
    triggerId: string
  }

  export type SparkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type SparkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateInput = {
    id?: string
    type: AvailableTriggersCreateNestedOneWithoutTriggersInput
    spark: SparkCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateInput = {
    id?: string
    sparkId: string
    triggerId: string
  }

  export type TriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: AvailableTriggersUpdateOneRequiredWithoutTriggersNestedInput
    spark?: SparkUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sparkId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateManyInput = {
    id?: string
    sparkId: string
    triggerId: string
  }

  export type TriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sparkId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggersCreateInput = {
    id?: string
    name: string
    triggers?: TriggerCreateNestedManyWithoutTypeInput
  }

  export type AvailableTriggersUncheckedCreateInput = {
    id?: string
    name: string
    triggers?: TriggerUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AvailableTriggersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    triggers?: TriggerUpdateManyWithoutTypeNestedInput
  }

  export type AvailableTriggersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    triggers?: TriggerUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AvailableTriggersCreateManyInput = {
    id?: string
    name: string
  }

  export type AvailableTriggersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateInput = {
    id?: string
    sortingOrder?: number
    spark: SparkCreateNestedOneWithoutActionsInput
    type: AvailableActionCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateInput = {
    id?: string
    sparkId: string
    actionId: string
    sortingOrder?: number
  }

  export type ActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    spark?: SparkUpdateOneRequiredWithoutActionsNestedInput
    type?: AvailableActionUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sparkId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionCreateManyInput = {
    id?: string
    sparkId: string
    actionId: string
    sortingOrder?: number
  }

  export type ActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sparkId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type AvailableActionCreateInput = {
    id?: string
    name: string
    actions?: ActionCreateNestedManyWithoutTypeInput
  }

  export type AvailableActionUncheckedCreateInput = {
    id?: string
    name: string
    actions?: ActionUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AvailableActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    actions?: ActionUpdateManyWithoutTypeNestedInput
  }

  export type AvailableActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    actions?: ActionUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AvailableActionCreateManyInput = {
    id?: string
    name: string
  }

  export type AvailableActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SparkRunCreateInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    spark: SparkCreateNestedOneWithoutSparkRunInput
    SparkRunOutbox?: SparkRunOutboxCreateNestedOneWithoutSparkRunInput
  }

  export type SparkRunUncheckedCreateInput = {
    id?: string
    sparkId: string
    metadata: JsonNullValueInput | InputJsonValue
    SparkRunOutbox?: SparkRunOutboxUncheckedCreateNestedOneWithoutSparkRunInput
  }

  export type SparkRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    spark?: SparkUpdateOneRequiredWithoutSparkRunNestedInput
    SparkRunOutbox?: SparkRunOutboxUpdateOneWithoutSparkRunNestedInput
  }

  export type SparkRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sparkId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    SparkRunOutbox?: SparkRunOutboxUncheckedUpdateOneWithoutSparkRunNestedInput
  }

  export type SparkRunCreateManyInput = {
    id?: string
    sparkId: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type SparkRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type SparkRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sparkId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type SparkRunOutboxCreateInput = {
    id?: string
    sparkRun: SparkRunCreateNestedOneWithoutSparkRunOutboxInput
  }

  export type SparkRunOutboxUncheckedCreateInput = {
    id?: string
    sparkRunId: string
  }

  export type SparkRunOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sparkRun?: SparkRunUpdateOneRequiredWithoutSparkRunOutboxNestedInput
  }

  export type SparkRunOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sparkRunId?: StringFieldUpdateOperationsInput | string
  }

  export type SparkRunOutboxCreateManyInput = {
    id?: string
    sparkRunId: string
  }

  export type SparkRunOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SparkRunOutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sparkRunId?: StringFieldUpdateOperationsInput | string
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type TriggerNullableScalarRelationFilter = {
    is?: TriggerWhereInput | null
    isNot?: TriggerWhereInput | null
  }

  export type ActionListRelationFilter = {
    every?: ActionWhereInput
    some?: ActionWhereInput
    none?: ActionWhereInput
  }

  export type SparkRunListRelationFilter = {
    every?: SparkRunWhereInput
    some?: SparkRunWhereInput
    none?: SparkRunWhereInput
  }

  export type ActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SparkRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SparkCountOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
  }

  export type SparkMaxOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
  }

  export type SparkMinOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
  }

  export type AvailableTriggersScalarRelationFilter = {
    is?: AvailableTriggersWhereInput
    isNot?: AvailableTriggersWhereInput
  }

  export type SparkScalarRelationFilter = {
    is?: SparkWhereInput
    isNot?: SparkWhereInput
  }

  export type TriggerCountOrderByAggregateInput = {
    id?: SortOrder
    sparkId?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    sparkId?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerMinOrderByAggregateInput = {
    id?: SortOrder
    sparkId?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerListRelationFilter = {
    every?: TriggerWhereInput
    some?: TriggerWhereInput
    none?: TriggerWhereInput
  }

  export type TriggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailableTriggersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableTriggersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableTriggersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionScalarRelationFilter = {
    is?: AvailableActionWhereInput
    isNot?: AvailableActionWhereInput
  }

  export type ActionCountOrderByAggregateInput = {
    id?: SortOrder
    sparkId?: SortOrder
    actionId?: SortOrder
    sortingOrder?: SortOrder
  }

  export type ActionAvgOrderByAggregateInput = {
    sortingOrder?: SortOrder
  }

  export type ActionMaxOrderByAggregateInput = {
    id?: SortOrder
    sparkId?: SortOrder
    actionId?: SortOrder
    sortingOrder?: SortOrder
  }

  export type ActionMinOrderByAggregateInput = {
    id?: SortOrder
    sparkId?: SortOrder
    actionId?: SortOrder
    sortingOrder?: SortOrder
  }

  export type ActionSumOrderByAggregateInput = {
    sortingOrder?: SortOrder
  }

  export type AvailableActionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SparkRunOutboxNullableScalarRelationFilter = {
    is?: SparkRunOutboxWhereInput | null
    isNot?: SparkRunOutboxWhereInput | null
  }

  export type SparkRunCountOrderByAggregateInput = {
    id?: SortOrder
    sparkId?: SortOrder
    metadata?: SortOrder
  }

  export type SparkRunMaxOrderByAggregateInput = {
    id?: SortOrder
    sparkId?: SortOrder
  }

  export type SparkRunMinOrderByAggregateInput = {
    id?: SortOrder
    sparkId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type SparkRunScalarRelationFilter = {
    is?: SparkRunWhereInput
    isNot?: SparkRunWhereInput
  }

  export type SparkRunOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    sparkRunId?: SortOrder
  }

  export type SparkRunOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    sparkRunId?: SortOrder
  }

  export type SparkRunOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    sparkRunId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TriggerCreateNestedOneWithoutSparkInput = {
    create?: XOR<TriggerCreateWithoutSparkInput, TriggerUncheckedCreateWithoutSparkInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutSparkInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionCreateNestedManyWithoutSparkInput = {
    create?: XOR<ActionCreateWithoutSparkInput, ActionUncheckedCreateWithoutSparkInput> | ActionCreateWithoutSparkInput[] | ActionUncheckedCreateWithoutSparkInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutSparkInput | ActionCreateOrConnectWithoutSparkInput[]
    createMany?: ActionCreateManySparkInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type SparkRunCreateNestedManyWithoutSparkInput = {
    create?: XOR<SparkRunCreateWithoutSparkInput, SparkRunUncheckedCreateWithoutSparkInput> | SparkRunCreateWithoutSparkInput[] | SparkRunUncheckedCreateWithoutSparkInput[]
    connectOrCreate?: SparkRunCreateOrConnectWithoutSparkInput | SparkRunCreateOrConnectWithoutSparkInput[]
    createMany?: SparkRunCreateManySparkInputEnvelope
    connect?: SparkRunWhereUniqueInput | SparkRunWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedOneWithoutSparkInput = {
    create?: XOR<TriggerCreateWithoutSparkInput, TriggerUncheckedCreateWithoutSparkInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutSparkInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionUncheckedCreateNestedManyWithoutSparkInput = {
    create?: XOR<ActionCreateWithoutSparkInput, ActionUncheckedCreateWithoutSparkInput> | ActionCreateWithoutSparkInput[] | ActionUncheckedCreateWithoutSparkInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutSparkInput | ActionCreateOrConnectWithoutSparkInput[]
    createMany?: ActionCreateManySparkInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type SparkRunUncheckedCreateNestedManyWithoutSparkInput = {
    create?: XOR<SparkRunCreateWithoutSparkInput, SparkRunUncheckedCreateWithoutSparkInput> | SparkRunCreateWithoutSparkInput[] | SparkRunUncheckedCreateWithoutSparkInput[]
    connectOrCreate?: SparkRunCreateOrConnectWithoutSparkInput | SparkRunCreateOrConnectWithoutSparkInput[]
    createMany?: SparkRunCreateManySparkInputEnvelope
    connect?: SparkRunWhereUniqueInput | SparkRunWhereUniqueInput[]
  }

  export type TriggerUpdateOneWithoutSparkNestedInput = {
    create?: XOR<TriggerCreateWithoutSparkInput, TriggerUncheckedCreateWithoutSparkInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutSparkInput
    upsert?: TriggerUpsertWithoutSparkInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutSparkInput, TriggerUpdateWithoutSparkInput>, TriggerUncheckedUpdateWithoutSparkInput>
  }

  export type ActionUpdateManyWithoutSparkNestedInput = {
    create?: XOR<ActionCreateWithoutSparkInput, ActionUncheckedCreateWithoutSparkInput> | ActionCreateWithoutSparkInput[] | ActionUncheckedCreateWithoutSparkInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutSparkInput | ActionCreateOrConnectWithoutSparkInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutSparkInput | ActionUpsertWithWhereUniqueWithoutSparkInput[]
    createMany?: ActionCreateManySparkInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutSparkInput | ActionUpdateWithWhereUniqueWithoutSparkInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutSparkInput | ActionUpdateManyWithWhereWithoutSparkInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type SparkRunUpdateManyWithoutSparkNestedInput = {
    create?: XOR<SparkRunCreateWithoutSparkInput, SparkRunUncheckedCreateWithoutSparkInput> | SparkRunCreateWithoutSparkInput[] | SparkRunUncheckedCreateWithoutSparkInput[]
    connectOrCreate?: SparkRunCreateOrConnectWithoutSparkInput | SparkRunCreateOrConnectWithoutSparkInput[]
    upsert?: SparkRunUpsertWithWhereUniqueWithoutSparkInput | SparkRunUpsertWithWhereUniqueWithoutSparkInput[]
    createMany?: SparkRunCreateManySparkInputEnvelope
    set?: SparkRunWhereUniqueInput | SparkRunWhereUniqueInput[]
    disconnect?: SparkRunWhereUniqueInput | SparkRunWhereUniqueInput[]
    delete?: SparkRunWhereUniqueInput | SparkRunWhereUniqueInput[]
    connect?: SparkRunWhereUniqueInput | SparkRunWhereUniqueInput[]
    update?: SparkRunUpdateWithWhereUniqueWithoutSparkInput | SparkRunUpdateWithWhereUniqueWithoutSparkInput[]
    updateMany?: SparkRunUpdateManyWithWhereWithoutSparkInput | SparkRunUpdateManyWithWhereWithoutSparkInput[]
    deleteMany?: SparkRunScalarWhereInput | SparkRunScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateOneWithoutSparkNestedInput = {
    create?: XOR<TriggerCreateWithoutSparkInput, TriggerUncheckedCreateWithoutSparkInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutSparkInput
    upsert?: TriggerUpsertWithoutSparkInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutSparkInput, TriggerUpdateWithoutSparkInput>, TriggerUncheckedUpdateWithoutSparkInput>
  }

  export type ActionUncheckedUpdateManyWithoutSparkNestedInput = {
    create?: XOR<ActionCreateWithoutSparkInput, ActionUncheckedCreateWithoutSparkInput> | ActionCreateWithoutSparkInput[] | ActionUncheckedCreateWithoutSparkInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutSparkInput | ActionCreateOrConnectWithoutSparkInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutSparkInput | ActionUpsertWithWhereUniqueWithoutSparkInput[]
    createMany?: ActionCreateManySparkInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutSparkInput | ActionUpdateWithWhereUniqueWithoutSparkInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutSparkInput | ActionUpdateManyWithWhereWithoutSparkInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type SparkRunUncheckedUpdateManyWithoutSparkNestedInput = {
    create?: XOR<SparkRunCreateWithoutSparkInput, SparkRunUncheckedCreateWithoutSparkInput> | SparkRunCreateWithoutSparkInput[] | SparkRunUncheckedCreateWithoutSparkInput[]
    connectOrCreate?: SparkRunCreateOrConnectWithoutSparkInput | SparkRunCreateOrConnectWithoutSparkInput[]
    upsert?: SparkRunUpsertWithWhereUniqueWithoutSparkInput | SparkRunUpsertWithWhereUniqueWithoutSparkInput[]
    createMany?: SparkRunCreateManySparkInputEnvelope
    set?: SparkRunWhereUniqueInput | SparkRunWhereUniqueInput[]
    disconnect?: SparkRunWhereUniqueInput | SparkRunWhereUniqueInput[]
    delete?: SparkRunWhereUniqueInput | SparkRunWhereUniqueInput[]
    connect?: SparkRunWhereUniqueInput | SparkRunWhereUniqueInput[]
    update?: SparkRunUpdateWithWhereUniqueWithoutSparkInput | SparkRunUpdateWithWhereUniqueWithoutSparkInput[]
    updateMany?: SparkRunUpdateManyWithWhereWithoutSparkInput | SparkRunUpdateManyWithWhereWithoutSparkInput[]
    deleteMany?: SparkRunScalarWhereInput | SparkRunScalarWhereInput[]
  }

  export type AvailableTriggersCreateNestedOneWithoutTriggersInput = {
    create?: XOR<AvailableTriggersCreateWithoutTriggersInput, AvailableTriggersUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: AvailableTriggersCreateOrConnectWithoutTriggersInput
    connect?: AvailableTriggersWhereUniqueInput
  }

  export type SparkCreateNestedOneWithoutTriggerInput = {
    create?: XOR<SparkCreateWithoutTriggerInput, SparkUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: SparkCreateOrConnectWithoutTriggerInput
    connect?: SparkWhereUniqueInput
  }

  export type AvailableTriggersUpdateOneRequiredWithoutTriggersNestedInput = {
    create?: XOR<AvailableTriggersCreateWithoutTriggersInput, AvailableTriggersUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: AvailableTriggersCreateOrConnectWithoutTriggersInput
    upsert?: AvailableTriggersUpsertWithoutTriggersInput
    connect?: AvailableTriggersWhereUniqueInput
    update?: XOR<XOR<AvailableTriggersUpdateToOneWithWhereWithoutTriggersInput, AvailableTriggersUpdateWithoutTriggersInput>, AvailableTriggersUncheckedUpdateWithoutTriggersInput>
  }

  export type SparkUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: XOR<SparkCreateWithoutTriggerInput, SparkUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: SparkCreateOrConnectWithoutTriggerInput
    upsert?: SparkUpsertWithoutTriggerInput
    connect?: SparkWhereUniqueInput
    update?: XOR<XOR<SparkUpdateToOneWithWhereWithoutTriggerInput, SparkUpdateWithoutTriggerInput>, SparkUncheckedUpdateWithoutTriggerInput>
  }

  export type TriggerCreateNestedManyWithoutTypeInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUpdateManyWithoutTypeNestedInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutTypeInput | TriggerUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutTypeInput | TriggerUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutTypeInput | TriggerUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutTypeInput | TriggerUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutTypeInput | TriggerUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutTypeInput | TriggerUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type SparkCreateNestedOneWithoutActionsInput = {
    create?: XOR<SparkCreateWithoutActionsInput, SparkUncheckedCreateWithoutActionsInput>
    connectOrCreate?: SparkCreateOrConnectWithoutActionsInput
    connect?: SparkWhereUniqueInput
  }

  export type AvailableActionCreateNestedOneWithoutActionsInput = {
    create?: XOR<AvailableActionCreateWithoutActionsInput, AvailableActionUncheckedCreateWithoutActionsInput>
    connectOrCreate?: AvailableActionCreateOrConnectWithoutActionsInput
    connect?: AvailableActionWhereUniqueInput
  }

  export type SparkUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<SparkCreateWithoutActionsInput, SparkUncheckedCreateWithoutActionsInput>
    connectOrCreate?: SparkCreateOrConnectWithoutActionsInput
    upsert?: SparkUpsertWithoutActionsInput
    connect?: SparkWhereUniqueInput
    update?: XOR<XOR<SparkUpdateToOneWithWhereWithoutActionsInput, SparkUpdateWithoutActionsInput>, SparkUncheckedUpdateWithoutActionsInput>
  }

  export type AvailableActionUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<AvailableActionCreateWithoutActionsInput, AvailableActionUncheckedCreateWithoutActionsInput>
    connectOrCreate?: AvailableActionCreateOrConnectWithoutActionsInput
    upsert?: AvailableActionUpsertWithoutActionsInput
    connect?: AvailableActionWhereUniqueInput
    update?: XOR<XOR<AvailableActionUpdateToOneWithWhereWithoutActionsInput, AvailableActionUpdateWithoutActionsInput>, AvailableActionUncheckedUpdateWithoutActionsInput>
  }

  export type ActionCreateNestedManyWithoutTypeInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ActionUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ActionUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutTypeInput | ActionUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutTypeInput | ActionUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutTypeInput | ActionUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ActionUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutTypeInput | ActionUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutTypeInput | ActionUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutTypeInput | ActionUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type SparkCreateNestedOneWithoutSparkRunInput = {
    create?: XOR<SparkCreateWithoutSparkRunInput, SparkUncheckedCreateWithoutSparkRunInput>
    connectOrCreate?: SparkCreateOrConnectWithoutSparkRunInput
    connect?: SparkWhereUniqueInput
  }

  export type SparkRunOutboxCreateNestedOneWithoutSparkRunInput = {
    create?: XOR<SparkRunOutboxCreateWithoutSparkRunInput, SparkRunOutboxUncheckedCreateWithoutSparkRunInput>
    connectOrCreate?: SparkRunOutboxCreateOrConnectWithoutSparkRunInput
    connect?: SparkRunOutboxWhereUniqueInput
  }

  export type SparkRunOutboxUncheckedCreateNestedOneWithoutSparkRunInput = {
    create?: XOR<SparkRunOutboxCreateWithoutSparkRunInput, SparkRunOutboxUncheckedCreateWithoutSparkRunInput>
    connectOrCreate?: SparkRunOutboxCreateOrConnectWithoutSparkRunInput
    connect?: SparkRunOutboxWhereUniqueInput
  }

  export type SparkUpdateOneRequiredWithoutSparkRunNestedInput = {
    create?: XOR<SparkCreateWithoutSparkRunInput, SparkUncheckedCreateWithoutSparkRunInput>
    connectOrCreate?: SparkCreateOrConnectWithoutSparkRunInput
    upsert?: SparkUpsertWithoutSparkRunInput
    connect?: SparkWhereUniqueInput
    update?: XOR<XOR<SparkUpdateToOneWithWhereWithoutSparkRunInput, SparkUpdateWithoutSparkRunInput>, SparkUncheckedUpdateWithoutSparkRunInput>
  }

  export type SparkRunOutboxUpdateOneWithoutSparkRunNestedInput = {
    create?: XOR<SparkRunOutboxCreateWithoutSparkRunInput, SparkRunOutboxUncheckedCreateWithoutSparkRunInput>
    connectOrCreate?: SparkRunOutboxCreateOrConnectWithoutSparkRunInput
    upsert?: SparkRunOutboxUpsertWithoutSparkRunInput
    disconnect?: SparkRunOutboxWhereInput | boolean
    delete?: SparkRunOutboxWhereInput | boolean
    connect?: SparkRunOutboxWhereUniqueInput
    update?: XOR<XOR<SparkRunOutboxUpdateToOneWithWhereWithoutSparkRunInput, SparkRunOutboxUpdateWithoutSparkRunInput>, SparkRunOutboxUncheckedUpdateWithoutSparkRunInput>
  }

  export type SparkRunOutboxUncheckedUpdateOneWithoutSparkRunNestedInput = {
    create?: XOR<SparkRunOutboxCreateWithoutSparkRunInput, SparkRunOutboxUncheckedCreateWithoutSparkRunInput>
    connectOrCreate?: SparkRunOutboxCreateOrConnectWithoutSparkRunInput
    upsert?: SparkRunOutboxUpsertWithoutSparkRunInput
    disconnect?: SparkRunOutboxWhereInput | boolean
    delete?: SparkRunOutboxWhereInput | boolean
    connect?: SparkRunOutboxWhereUniqueInput
    update?: XOR<XOR<SparkRunOutboxUpdateToOneWithWhereWithoutSparkRunInput, SparkRunOutboxUpdateWithoutSparkRunInput>, SparkRunOutboxUncheckedUpdateWithoutSparkRunInput>
  }

  export type SparkRunCreateNestedOneWithoutSparkRunOutboxInput = {
    create?: XOR<SparkRunCreateWithoutSparkRunOutboxInput, SparkRunUncheckedCreateWithoutSparkRunOutboxInput>
    connectOrCreate?: SparkRunCreateOrConnectWithoutSparkRunOutboxInput
    connect?: SparkRunWhereUniqueInput
  }

  export type SparkRunUpdateOneRequiredWithoutSparkRunOutboxNestedInput = {
    create?: XOR<SparkRunCreateWithoutSparkRunOutboxInput, SparkRunUncheckedCreateWithoutSparkRunOutboxInput>
    connectOrCreate?: SparkRunCreateOrConnectWithoutSparkRunOutboxInput
    upsert?: SparkRunUpsertWithoutSparkRunOutboxInput
    connect?: SparkRunWhereUniqueInput
    update?: XOR<XOR<SparkRunUpdateToOneWithWhereWithoutSparkRunOutboxInput, SparkRunUpdateWithoutSparkRunOutboxInput>, SparkRunUncheckedUpdateWithoutSparkRunOutboxInput>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TriggerCreateWithoutSparkInput = {
    id?: string
    type: AvailableTriggersCreateNestedOneWithoutTriggersInput
  }

  export type TriggerUncheckedCreateWithoutSparkInput = {
    id?: string
    triggerId: string
  }

  export type TriggerCreateOrConnectWithoutSparkInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutSparkInput, TriggerUncheckedCreateWithoutSparkInput>
  }

  export type ActionCreateWithoutSparkInput = {
    id?: string
    sortingOrder?: number
    type: AvailableActionCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateWithoutSparkInput = {
    id?: string
    actionId: string
    sortingOrder?: number
  }

  export type ActionCreateOrConnectWithoutSparkInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutSparkInput, ActionUncheckedCreateWithoutSparkInput>
  }

  export type ActionCreateManySparkInputEnvelope = {
    data: ActionCreateManySparkInput | ActionCreateManySparkInput[]
    skipDuplicates?: boolean
  }

  export type SparkRunCreateWithoutSparkInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    SparkRunOutbox?: SparkRunOutboxCreateNestedOneWithoutSparkRunInput
  }

  export type SparkRunUncheckedCreateWithoutSparkInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    SparkRunOutbox?: SparkRunOutboxUncheckedCreateNestedOneWithoutSparkRunInput
  }

  export type SparkRunCreateOrConnectWithoutSparkInput = {
    where: SparkRunWhereUniqueInput
    create: XOR<SparkRunCreateWithoutSparkInput, SparkRunUncheckedCreateWithoutSparkInput>
  }

  export type SparkRunCreateManySparkInputEnvelope = {
    data: SparkRunCreateManySparkInput | SparkRunCreateManySparkInput[]
    skipDuplicates?: boolean
  }

  export type TriggerUpsertWithoutSparkInput = {
    update: XOR<TriggerUpdateWithoutSparkInput, TriggerUncheckedUpdateWithoutSparkInput>
    create: XOR<TriggerCreateWithoutSparkInput, TriggerUncheckedCreateWithoutSparkInput>
    where?: TriggerWhereInput
  }

  export type TriggerUpdateToOneWithWhereWithoutSparkInput = {
    where?: TriggerWhereInput
    data: XOR<TriggerUpdateWithoutSparkInput, TriggerUncheckedUpdateWithoutSparkInput>
  }

  export type TriggerUpdateWithoutSparkInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: AvailableTriggersUpdateOneRequiredWithoutTriggersNestedInput
  }

  export type TriggerUncheckedUpdateWithoutSparkInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUpsertWithWhereUniqueWithoutSparkInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutSparkInput, ActionUncheckedUpdateWithoutSparkInput>
    create: XOR<ActionCreateWithoutSparkInput, ActionUncheckedCreateWithoutSparkInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutSparkInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutSparkInput, ActionUncheckedUpdateWithoutSparkInput>
  }

  export type ActionUpdateManyWithWhereWithoutSparkInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutSparkInput>
  }

  export type ActionScalarWhereInput = {
    AND?: ActionScalarWhereInput | ActionScalarWhereInput[]
    OR?: ActionScalarWhereInput[]
    NOT?: ActionScalarWhereInput | ActionScalarWhereInput[]
    id?: StringFilter<"Action"> | string
    sparkId?: StringFilter<"Action"> | string
    actionId?: StringFilter<"Action"> | string
    sortingOrder?: IntFilter<"Action"> | number
  }

  export type SparkRunUpsertWithWhereUniqueWithoutSparkInput = {
    where: SparkRunWhereUniqueInput
    update: XOR<SparkRunUpdateWithoutSparkInput, SparkRunUncheckedUpdateWithoutSparkInput>
    create: XOR<SparkRunCreateWithoutSparkInput, SparkRunUncheckedCreateWithoutSparkInput>
  }

  export type SparkRunUpdateWithWhereUniqueWithoutSparkInput = {
    where: SparkRunWhereUniqueInput
    data: XOR<SparkRunUpdateWithoutSparkInput, SparkRunUncheckedUpdateWithoutSparkInput>
  }

  export type SparkRunUpdateManyWithWhereWithoutSparkInput = {
    where: SparkRunScalarWhereInput
    data: XOR<SparkRunUpdateManyMutationInput, SparkRunUncheckedUpdateManyWithoutSparkInput>
  }

  export type SparkRunScalarWhereInput = {
    AND?: SparkRunScalarWhereInput | SparkRunScalarWhereInput[]
    OR?: SparkRunScalarWhereInput[]
    NOT?: SparkRunScalarWhereInput | SparkRunScalarWhereInput[]
    id?: StringFilter<"SparkRun"> | string
    sparkId?: StringFilter<"SparkRun"> | string
    metadata?: JsonFilter<"SparkRun">
  }

  export type AvailableTriggersCreateWithoutTriggersInput = {
    id?: string
    name: string
  }

  export type AvailableTriggersUncheckedCreateWithoutTriggersInput = {
    id?: string
    name: string
  }

  export type AvailableTriggersCreateOrConnectWithoutTriggersInput = {
    where: AvailableTriggersWhereUniqueInput
    create: XOR<AvailableTriggersCreateWithoutTriggersInput, AvailableTriggersUncheckedCreateWithoutTriggersInput>
  }

  export type SparkCreateWithoutTriggerInput = {
    id?: string
    triggerId: string
    actions?: ActionCreateNestedManyWithoutSparkInput
    SparkRun?: SparkRunCreateNestedManyWithoutSparkInput
  }

  export type SparkUncheckedCreateWithoutTriggerInput = {
    id?: string
    triggerId: string
    actions?: ActionUncheckedCreateNestedManyWithoutSparkInput
    SparkRun?: SparkRunUncheckedCreateNestedManyWithoutSparkInput
  }

  export type SparkCreateOrConnectWithoutTriggerInput = {
    where: SparkWhereUniqueInput
    create: XOR<SparkCreateWithoutTriggerInput, SparkUncheckedCreateWithoutTriggerInput>
  }

  export type AvailableTriggersUpsertWithoutTriggersInput = {
    update: XOR<AvailableTriggersUpdateWithoutTriggersInput, AvailableTriggersUncheckedUpdateWithoutTriggersInput>
    create: XOR<AvailableTriggersCreateWithoutTriggersInput, AvailableTriggersUncheckedCreateWithoutTriggersInput>
    where?: AvailableTriggersWhereInput
  }

  export type AvailableTriggersUpdateToOneWithWhereWithoutTriggersInput = {
    where?: AvailableTriggersWhereInput
    data: XOR<AvailableTriggersUpdateWithoutTriggersInput, AvailableTriggersUncheckedUpdateWithoutTriggersInput>
  }

  export type AvailableTriggersUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggersUncheckedUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SparkUpsertWithoutTriggerInput = {
    update: XOR<SparkUpdateWithoutTriggerInput, SparkUncheckedUpdateWithoutTriggerInput>
    create: XOR<SparkCreateWithoutTriggerInput, SparkUncheckedCreateWithoutTriggerInput>
    where?: SparkWhereInput
  }

  export type SparkUpdateToOneWithWhereWithoutTriggerInput = {
    where?: SparkWhereInput
    data: XOR<SparkUpdateWithoutTriggerInput, SparkUncheckedUpdateWithoutTriggerInput>
  }

  export type SparkUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    actions?: ActionUpdateManyWithoutSparkNestedInput
    SparkRun?: SparkRunUpdateManyWithoutSparkNestedInput
  }

  export type SparkUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    actions?: ActionUncheckedUpdateManyWithoutSparkNestedInput
    SparkRun?: SparkRunUncheckedUpdateManyWithoutSparkNestedInput
  }

  export type TriggerCreateWithoutTypeInput = {
    id?: string
    spark: SparkCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutTypeInput = {
    id?: string
    sparkId: string
  }

  export type TriggerCreateOrConnectWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput>
  }

  export type TriggerCreateManyTypeInputEnvelope = {
    data: TriggerCreateManyTypeInput | TriggerCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type TriggerUpsertWithWhereUniqueWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    update: XOR<TriggerUpdateWithoutTypeInput, TriggerUncheckedUpdateWithoutTypeInput>
    create: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput>
  }

  export type TriggerUpdateWithWhereUniqueWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    data: XOR<TriggerUpdateWithoutTypeInput, TriggerUncheckedUpdateWithoutTypeInput>
  }

  export type TriggerUpdateManyWithWhereWithoutTypeInput = {
    where: TriggerScalarWhereInput
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyWithoutTypeInput>
  }

  export type TriggerScalarWhereInput = {
    AND?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    OR?: TriggerScalarWhereInput[]
    NOT?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    id?: StringFilter<"Trigger"> | string
    sparkId?: StringFilter<"Trigger"> | string
    triggerId?: StringFilter<"Trigger"> | string
  }

  export type SparkCreateWithoutActionsInput = {
    id?: string
    triggerId: string
    trigger?: TriggerCreateNestedOneWithoutSparkInput
    SparkRun?: SparkRunCreateNestedManyWithoutSparkInput
  }

  export type SparkUncheckedCreateWithoutActionsInput = {
    id?: string
    triggerId: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutSparkInput
    SparkRun?: SparkRunUncheckedCreateNestedManyWithoutSparkInput
  }

  export type SparkCreateOrConnectWithoutActionsInput = {
    where: SparkWhereUniqueInput
    create: XOR<SparkCreateWithoutActionsInput, SparkUncheckedCreateWithoutActionsInput>
  }

  export type AvailableActionCreateWithoutActionsInput = {
    id?: string
    name: string
  }

  export type AvailableActionUncheckedCreateWithoutActionsInput = {
    id?: string
    name: string
  }

  export type AvailableActionCreateOrConnectWithoutActionsInput = {
    where: AvailableActionWhereUniqueInput
    create: XOR<AvailableActionCreateWithoutActionsInput, AvailableActionUncheckedCreateWithoutActionsInput>
  }

  export type SparkUpsertWithoutActionsInput = {
    update: XOR<SparkUpdateWithoutActionsInput, SparkUncheckedUpdateWithoutActionsInput>
    create: XOR<SparkCreateWithoutActionsInput, SparkUncheckedCreateWithoutActionsInput>
    where?: SparkWhereInput
  }

  export type SparkUpdateToOneWithWhereWithoutActionsInput = {
    where?: SparkWhereInput
    data: XOR<SparkUpdateWithoutActionsInput, SparkUncheckedUpdateWithoutActionsInput>
  }

  export type SparkUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutSparkNestedInput
    SparkRun?: SparkRunUpdateManyWithoutSparkNestedInput
  }

  export type SparkUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutSparkNestedInput
    SparkRun?: SparkRunUncheckedUpdateManyWithoutSparkNestedInput
  }

  export type AvailableActionUpsertWithoutActionsInput = {
    update: XOR<AvailableActionUpdateWithoutActionsInput, AvailableActionUncheckedUpdateWithoutActionsInput>
    create: XOR<AvailableActionCreateWithoutActionsInput, AvailableActionUncheckedCreateWithoutActionsInput>
    where?: AvailableActionWhereInput
  }

  export type AvailableActionUpdateToOneWithWhereWithoutActionsInput = {
    where?: AvailableActionWhereInput
    data: XOR<AvailableActionUpdateWithoutActionsInput, AvailableActionUncheckedUpdateWithoutActionsInput>
  }

  export type AvailableActionUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateWithoutTypeInput = {
    id?: string
    sortingOrder?: number
    spark: SparkCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateWithoutTypeInput = {
    id?: string
    sparkId: string
    sortingOrder?: number
  }

  export type ActionCreateOrConnectWithoutTypeInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput>
  }

  export type ActionCreateManyTypeInputEnvelope = {
    data: ActionCreateManyTypeInput | ActionCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type ActionUpsertWithWhereUniqueWithoutTypeInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutTypeInput, ActionUncheckedUpdateWithoutTypeInput>
    create: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutTypeInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutTypeInput, ActionUncheckedUpdateWithoutTypeInput>
  }

  export type ActionUpdateManyWithWhereWithoutTypeInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutTypeInput>
  }

  export type SparkCreateWithoutSparkRunInput = {
    id?: string
    triggerId: string
    trigger?: TriggerCreateNestedOneWithoutSparkInput
    actions?: ActionCreateNestedManyWithoutSparkInput
  }

  export type SparkUncheckedCreateWithoutSparkRunInput = {
    id?: string
    triggerId: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutSparkInput
    actions?: ActionUncheckedCreateNestedManyWithoutSparkInput
  }

  export type SparkCreateOrConnectWithoutSparkRunInput = {
    where: SparkWhereUniqueInput
    create: XOR<SparkCreateWithoutSparkRunInput, SparkUncheckedCreateWithoutSparkRunInput>
  }

  export type SparkRunOutboxCreateWithoutSparkRunInput = {
    id?: string
  }

  export type SparkRunOutboxUncheckedCreateWithoutSparkRunInput = {
    id?: string
  }

  export type SparkRunOutboxCreateOrConnectWithoutSparkRunInput = {
    where: SparkRunOutboxWhereUniqueInput
    create: XOR<SparkRunOutboxCreateWithoutSparkRunInput, SparkRunOutboxUncheckedCreateWithoutSparkRunInput>
  }

  export type SparkUpsertWithoutSparkRunInput = {
    update: XOR<SparkUpdateWithoutSparkRunInput, SparkUncheckedUpdateWithoutSparkRunInput>
    create: XOR<SparkCreateWithoutSparkRunInput, SparkUncheckedCreateWithoutSparkRunInput>
    where?: SparkWhereInput
  }

  export type SparkUpdateToOneWithWhereWithoutSparkRunInput = {
    where?: SparkWhereInput
    data: XOR<SparkUpdateWithoutSparkRunInput, SparkUncheckedUpdateWithoutSparkRunInput>
  }

  export type SparkUpdateWithoutSparkRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutSparkNestedInput
    actions?: ActionUpdateManyWithoutSparkNestedInput
  }

  export type SparkUncheckedUpdateWithoutSparkRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutSparkNestedInput
    actions?: ActionUncheckedUpdateManyWithoutSparkNestedInput
  }

  export type SparkRunOutboxUpsertWithoutSparkRunInput = {
    update: XOR<SparkRunOutboxUpdateWithoutSparkRunInput, SparkRunOutboxUncheckedUpdateWithoutSparkRunInput>
    create: XOR<SparkRunOutboxCreateWithoutSparkRunInput, SparkRunOutboxUncheckedCreateWithoutSparkRunInput>
    where?: SparkRunOutboxWhereInput
  }

  export type SparkRunOutboxUpdateToOneWithWhereWithoutSparkRunInput = {
    where?: SparkRunOutboxWhereInput
    data: XOR<SparkRunOutboxUpdateWithoutSparkRunInput, SparkRunOutboxUncheckedUpdateWithoutSparkRunInput>
  }

  export type SparkRunOutboxUpdateWithoutSparkRunInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SparkRunOutboxUncheckedUpdateWithoutSparkRunInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SparkRunCreateWithoutSparkRunOutboxInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    spark: SparkCreateNestedOneWithoutSparkRunInput
  }

  export type SparkRunUncheckedCreateWithoutSparkRunOutboxInput = {
    id?: string
    sparkId: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type SparkRunCreateOrConnectWithoutSparkRunOutboxInput = {
    where: SparkRunWhereUniqueInput
    create: XOR<SparkRunCreateWithoutSparkRunOutboxInput, SparkRunUncheckedCreateWithoutSparkRunOutboxInput>
  }

  export type SparkRunUpsertWithoutSparkRunOutboxInput = {
    update: XOR<SparkRunUpdateWithoutSparkRunOutboxInput, SparkRunUncheckedUpdateWithoutSparkRunOutboxInput>
    create: XOR<SparkRunCreateWithoutSparkRunOutboxInput, SparkRunUncheckedCreateWithoutSparkRunOutboxInput>
    where?: SparkRunWhereInput
  }

  export type SparkRunUpdateToOneWithWhereWithoutSparkRunOutboxInput = {
    where?: SparkRunWhereInput
    data: XOR<SparkRunUpdateWithoutSparkRunOutboxInput, SparkRunUncheckedUpdateWithoutSparkRunOutboxInput>
  }

  export type SparkRunUpdateWithoutSparkRunOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    spark?: SparkUpdateOneRequiredWithoutSparkRunNestedInput
  }

  export type SparkRunUncheckedUpdateWithoutSparkRunOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    sparkId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ActionCreateManySparkInput = {
    id?: string
    actionId: string
    sortingOrder?: number
  }

  export type SparkRunCreateManySparkInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type ActionUpdateWithoutSparkInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    type?: AvailableActionUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateWithoutSparkInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionUncheckedUpdateManyWithoutSparkInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type SparkRunUpdateWithoutSparkInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    SparkRunOutbox?: SparkRunOutboxUpdateOneWithoutSparkRunNestedInput
  }

  export type SparkRunUncheckedUpdateWithoutSparkInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    SparkRunOutbox?: SparkRunOutboxUncheckedUpdateOneWithoutSparkRunNestedInput
  }

  export type SparkRunUncheckedUpdateManyWithoutSparkInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type TriggerCreateManyTypeInput = {
    id?: string
    sparkId: string
  }

  export type TriggerUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    spark?: SparkUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sparkId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sparkId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateManyTypeInput = {
    id?: string
    sparkId: string
    sortingOrder?: number
  }

  export type ActionUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    spark?: SparkUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sparkId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sparkId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }



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