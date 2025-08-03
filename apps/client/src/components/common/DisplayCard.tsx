/**---------------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License.
 * See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------*/

import { } from 'lucide-react';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type BadgePropertyType =
  | 'Residential'
  | 'Commercial'
  | 'Industrial'
  | 'Vacational'
  | 'Land';

type BadgePropertyState = 'Recommended' | 'Recently Viewed' | 'Hot';

interface DisplayPropertyCardProps {
  badgePropertyType?: BadgePropertyType;
  badgePropertyState?: BadgePropertyState;
  image?: string;
  imageTitle?: string;
}

export function DisplayPropertyCard({ image, imageTitle }: DisplayPropertyCardProps) {
  return (
    <div className="p-1">
      <Card className='m-0 p-0'>
        <CardHeader className='p-0'>
          <div>
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
              <img src={image} alt={imageTitle} className='absolute inset-0 w-full h-full object-cover rounded-lg' />
            </AspectRatio>
          </div>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
    </div>
  );
}

export function DisplayArticleCard() {
  return <Card></Card>;
}
