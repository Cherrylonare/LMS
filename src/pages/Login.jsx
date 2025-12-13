// import { useState, useEffect } from "react";
// import { AppWindowIcon, UserIcon, MailIcon, LockIcon } from "lucide-react";
// import Button from "../components/ui/button.jsx";
// import { toast } from "sonner";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../components/ui/card";
// import { Input } from "../components/ui/input";
// import { useRegisterUserMutation, useLoginUserMutation } from "../features/api/authApi.js";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
// import {useNavigate} from "react-router-dom";

// const LoginSignup = () => {
//   // Signup state
//   const [signupInput, setSignupInput] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   // Login state
//   const [loginInput, setLoginInput] = useState({
//     email: "",
//     password: "",
//   });
//   const [registerUser,
//     {
//       data: registerData,
//       error: registerError,
//       isLoading: registerIsLoading,
//       isSuccess: registerIsSuccess
//     },
//   ] = useRegisterUserMutation();
//   const [loginUser,
//     {
//       data: loginData,
//       error: loginError,
//       isLoading: loginIsLoading,
//       isSuccess: loginIsSuccess }
//   ] = useLoginUserMutation();

//   // Generic change handler
//   const navigate = useNavigate();
//   const changeInputHandler = (e, type) => {
//     const { name, value } = e.target;
//     if (type === "signup") {
//       setSignupInput((prev) => ({ ...prev, [name]: value }));
//     } else if (type === "login") {
//       setLoginInput((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   // Form submit handlers
//   const handleSubmit = async (e, type) => {
//     e.preventDefault();
//     const inputData = type === "signup" ? signupInput : loginInput;
//     const action = type === "signup" ? registerUser : loginUser;
//     await action(inputData).unwrap();
//   };
//   useEffect(() => {
//     if (registerIsSuccess && registerData) {
//       toast.success(registerData.message || "Signup Successful!");
//     }
//     if (registerError) {
//       toast.error(registerData?.data?.message || "Signup Failed!");
//     }
//     if (loginIsSuccess && loginData) {
//       toast.success(loginData.message || "Login Successful!");
//       navigate ("/")
//     }
//     if (loginError) {
//       toast.error(loginError?.data?.message || "Login Failed!");
//     }

//   },
//     [registerIsSuccess, registerError, loginIsSuccess, loginError, registerData, loginData]);


//   return (
//     <div className="flex h-screen w-full items-center justify-center p-6 bg-gray-900 mt-12">
//       {/* Glassmorphic Card */}
//       <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 animate-fadeIn">
//         <Tabs defaultValue="signup" className="w-full">
//           {/* Header */}
//           <div className="flex flex-col items-center mb-6">
//             <AppWindowIcon className="h-10 w-10 text-white mb-2" />
//             <h1 className="text-2xl font-bold text-white">Welcome</h1>
//             <p className="text-sm text-white/80">Login or create your account</p>
//           </div>

//           {/* Tabs */}
//           <TabsList className="grid grid-cols-2 mb-6 bg-white/20 rounded-lg p-1">
//             <TabsTrigger
//               value="signup"
//               className="data-[state=active]:bg-white data-[state=active]:text-purple-600 text-white rounded-md transition-all"
//             >
//               Signup
//             </TabsTrigger>
//             <TabsTrigger
//               value="login"
//               className="data-[state=active]:bg-white data-[state=active]:text-purple-600 text-white rounded-md transition-all"
//             >
//               Login
//             </TabsTrigger>
//           </TabsList>

//           {/* Signup Tab */}
//           <TabsContent value="signup">
//             <Card className="bg-white/10 border-none shadow-none text-white">
//               <CardHeader>
//                 <CardTitle>Create Account</CardTitle>
//                 <CardDescription className="text-white/70">
//                   Fill in the details to get started.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="grid gap-5">
//                 <div className="relative">
//                   <UserIcon className="absolute left-3 top-3 text-white/50" />
//                   <Input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     value={signupInput.name}
//                     onChange={(e) => changeInputHandler(e, "signup")}
//                     required
//                     className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-purple-400"
//                   />
//                 </div>
//                 <div className="relative">
//                   <MailIcon className="absolute left-3 top-3 text-white/50" />
//                   <Input
//                     type="email"
//                     name="email"
//                     placeholder="Email Address"
//                     value={signupInput.email}
//                     onChange={(e) => changeInputHandler(e, "signup")}
//                     required
//                     className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-purple-400"
//                   />
//                 </div>
//                 <div className="relative">
//                   <LockIcon className="absolute left-3 top-3 text-white/50" />
//                   <Input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={signupInput.password}
//                     onChange={(e) => changeInputHandler(e, "signup")}
//                     required
//                     className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-purple-400"
//                   />
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button
//                   onClick={(e) => handleSubmit(e, "signup")}
//                   className="w-full py-2 rounded-xl bg-white text-purple-600 font-semibold hover:bg-purple-100 transition-all"
//                   disabled={registerIsLoading}
//                 >
//                   {registerIsLoading ? "Signing Up..." : "Sign Up"}
//                 </Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>

//           {/* Login Tab */}
//           <TabsContent value="login">
//             <Card className="bg-white/10 border-none shadow-none text-white">
//               <CardHeader>
//                 <CardTitle>Welcome Back</CardTitle>
//                 <CardDescription className="text-white/70">
//                   Enter your credentials to continue.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="grid gap-5">
//                 <div className="relative">
//                   <MailIcon className="absolute left-3 top-3 text-white/50" />
//                   <Input
//                     type="email"
//                     name="email"
//                     placeholder="Email Address"
//                     value={loginInput.email}
//                     onChange={(e) => changeInputHandler(e, "login")}
//                     required
//                     className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-purple-400"
//                   />
//                 </div>
//                 <div className="relative">
//                   <LockIcon className="absolute left-3 top-3 text-white/50" />
//                   <Input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={loginInput.password}
//                     onChange={(e) => changeInputHandler(e, "login")}
//                     required
//                     className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-purple-400"
//                   />
//                 </div>
//                 <p className="text-right text-xs text-white/70 hover:underline cursor-pointer">
//                   Forgot Password?
//                 </p>
//               </CardContent>
//               <CardFooter>
//                 <Button
//                   disabled={loginIsLoading}
//                   onClick={(e) => handleSubmit(e, "login")}
//                   className="w-full rounded-xl py-2 bg-white text-purple-600 font-semibold hover:bg-purple-100 transition-all"
//                 >
//                   {loginIsLoading ? "Logging In..." : "Login"}
//                 </Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;
import { useState, useEffect } from "react";
import { AppWindowIcon, UserIcon, MailIcon, LockIcon } from "lucide-react";
import Button from "../components/ui/button.jsx";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { useRegisterUserMutation, useLoginUserMutation } from "../features/api/authApi.js";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "" });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const [registerUser, { data: registerData, error: registerError, isLoading: registerIsLoading, isSuccess: registerIsSuccess }] = useRegisterUserMutation();
  const [loginUser, { data: loginData, error: loginError, isLoading: loginIsLoading, isSuccess: loginIsSuccess }] = useLoginUserMutation();

  const navigate = useNavigate();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput((prev) => ({ ...prev, [name]: value }));
    } else if (type === "login") {
      setLoginInput((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ← फिक्स 1: try-catch ऐड किया (error पर loading reset हो जाएगा)
  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;

    try {
      await action(inputData).unwrap();
    } catch (err) {
      console.log("API Error:", err);
    }
  };

  useEffect(() => {
    if (registerIsSuccess && registerData) toast.success(registerData.message || "Signup Successful!");
    if (registerError) toast.error(registerError?.data?.message || "Signup Failed!");
    if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "Login Successful!");
      navigate("/");
    }
    if (loginError) toast.error(loginError?.data?.message || "Login Failed!");
  }, [registerIsSuccess, registerError, loginIsSuccess, loginError, registerData, loginData, navigate]);

  return (
    <div className="flex h-screen w-full items-center justify-center p-6 bg-gray-900 mt-12">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 animate-fadeIn">
        <Tabs defaultValue="signup" className="w-full">
          <div className="flex flex-col items-center mb-6">
            <AppWindowIcon className="h-10 w-10 text-white mb-2" />
            <h1 className="text-2xl font-bold text-white">Welcome</h1>
            <p className="text-sm text-white/80">Login or create your account</p>
          </div>

          <TabsList className="grid grid-cols-2 mb-6 bg-white/20 rounded-lg p-1">
            <TabsTrigger value="signup" className="data-[state=active]:bg-white data-[state=active]:text-purple-600 text-white rounded-md transition-all">Signup</TabsTrigger>
            <TabsTrigger value="login" className="data-[state=active]:bg-white data-[state=active]:text-purple-600 text-white rounded-md transition-all">Login</TabsTrigger>
          </TabsList>

          <TabsContent value="signup">
            <Card className="bg-white/10 border-none shadow-none text-white">
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription className="text-white/70">Fill in the details to get started.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5">
                <div className="relative">
                  <UserIcon className="absolute left-3 top-3 text-white/50" />
                  <Input type="text" name="name" placeholder="Full Name" value={signupInput.name} onChange={(e) => changeInputHandler(e, "signup")} required className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-purple-400" />
                </div>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-3 text-white/50" />
                  <Input type="email" name="email" placeholder="Email Address" value={signupInput.email} onChange={(e) => changeInputHandler(e, "signup")} required className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-purple-400" />
                </div>
                <div className="relative">
                  <LockIcon className="absolute left-3 top-3 text-white/50" />
                  <Input type="password" name="password" placeholder="Password" value={signupInput.password} onChange={(e) => changeInputHandler(e, "signup")} required className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-purple-400" />
                </div>
              </CardContent>
              <CardFooter>
                {/* ← फिक्स 2: form रैप + type="submit" (UI वैसा ही) */}
                <form onSubmit={(e) => handleSubmit(e, "signup")} className="w-full">
                  <Button type="submit" className="w-full py-2 rounded-xl bg-white text-purple-600 font-semibold hover:bg-purple-100 transition-all" disabled={registerIsLoading}>
                    {registerIsLoading ? "Signing Up..." : "Sign Up"}
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="login">
            <Card className="bg-white/10 border-none shadow-none text-white">
              <CardHeader>
                <CardTitle>Welcome Back</CardTitle>
                <CardDescription className="text-white/70">Enter your credentials to continue.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5">
                <div className="relative">
                  <MailIcon className="absolute left-3 top-3 text-white/50" />
                  <Input type="email" name="email" placeholder="Email Address" value={loginInput.email} onChange={(e) => changeInputHandler(e, "login")} required className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-purple-400" />
                </div>
                <div className="relative">
                  <LockIcon className="absolute left-3 top-3 text-white/50" />
                  <Input type="password" name="password" placeholder="Password" value={loginInput.password} onChange={(e) => changeInputHandler(e, "login")} required className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-purple-400" />
                </div>
                <p className="text-right text-xs text-white/70 hover:underline cursor-pointer">Forgot Password?</p>
              </CardContent>
              <CardFooter>
                {/* ← फिक्स 2: form रैप + type="submit" */}
                <form onSubmit={(e) => handleSubmit(e, "login")} className="w-full">
                  <Button type="submit" className="w-full rounded-xl py-2 bg-white text-purple-600 font-semibold hover:bg-purple-100 transition-all" disabled={loginIsLoading}>
                    {loginIsLoading ? "Logging In..." : "Login"}
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginSignup;