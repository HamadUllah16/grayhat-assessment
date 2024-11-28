import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-svh w-svw">
      <div className="flex flex-grow gap-1 items-center justify-center">

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

      </div>
    </div>
  );
}
