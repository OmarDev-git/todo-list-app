// Third Party
import { Separator } from '@heroui/react';


export default function Title({title}) {
  return (
    <div className="w-full text-center">
      <h1 className="text-5xl font-bold">{title}</h1>
      <Separator />
    </div>
  );
}
