'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import LoginForm from "./components/LoginForm";
import { useEffect } from "react";
import { setUser } from "./redux/features/userSlice";

export default function Home() {
  const { name, email } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const email = localStorage.getItem('email')
    const name = localStorage.getItem('name')

    dispatch(setUser({ email, name }))

  }, [email, name])
  return (
    <div className="flex h-svh w-svw">
      <div className="flex flex-grow gap-1 items-center justify-center">
        {name && email ?
          <>
            <Link href={'/view-services'}>
              <Button>
                View Services
              </Button>
            </Link>

            <Link href={'/add-service'}>
              <Button>
                Add Service
              </Button>
            </Link>
          </>
          :
          <LoginForm />
        }

      </div>
    </div>
  );
}
