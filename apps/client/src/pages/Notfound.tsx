/**---------------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License.
 * See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------*/

import { Error404 } from "@/components/common/404";
import { Button } from "@/components/ui/button";

export default function Notfound() {
  return (
    <div className="flex justify-center items-center h-lvh relative">
      <Error404 className="absolute z-1 m-12 lg:m-48" />
      <div className="absolute z-20 flex flex-col space-y-6 w-96 lg:space-y-12 items-center lg:w-2xl">
        <h1 className="font-bold text-xl lg:text-3xl">Nothing to see here</h1>
        <p>
          The page you are trying to open does not exist. You may have mistyped
          the address, or the page has been moved to another URL. If you
          think this is an error contact support.
        </p>
        <Button className="cursor-pointer">Take me home</Button>
      </div>
    </div>
  );
}
