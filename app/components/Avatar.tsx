import { User } from "@prisma/client"
import Image from "next/image"

interface AvatarProps {
    user?: User
}


const Avatar: React.FC<AvatarProps> = ({ user }) => {

    return (
        <div className="relative">
            <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
                <Image alt="Avatar" src={user?.image || "/images/placeholder.jpg"} fill />
            </div>
            <span className="absolute block bottom-1.5 right-0 w-2 h-2 md:h-3 md:w-3 ring-2 ring-white bg-green-500 rounded-full" />
        </div>
    )
}

export default Avatar