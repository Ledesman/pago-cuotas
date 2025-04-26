
export default function Example() {
    return (
      <>
     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="TailwindPLUS Logo" width={160} height={40} className="h-10 w-auto" />
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email
            </label>
            <Input
              id="email"
              type="email"
              className="w-full h-14 px-4 rounded-md border border-gray-300"
              placeholder=""
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-gray-800">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              className="w-full h-14 px-4 rounded-md border border-gray-300"
              placeholder=""
            />
          </div>

          <Button className="w-full h-14 bg-[#0a0b14] hover:bg-[#1a1b24] text-white rounded-full text-base font-medium">
            Sign in to account
          </Button>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup" className="text-gray-900 font-medium hover:underline inline-flex items-center">
                Get access <span className="ml-1">→</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
      </>
    )
  }