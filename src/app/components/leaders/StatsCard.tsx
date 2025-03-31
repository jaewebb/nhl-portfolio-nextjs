import * as React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'

import { type Leader } from '@/app/types/leader'

type StatsCardProps = {
  decimals?: number
  isPercent?: boolean
  leader: Leader
  statName: string
}

export default function LeaderStatsCard({
  decimals,
  isPercent = false,
  leader,
  statName,
}: StatsCardProps) {
  return (
    <Link href={`/player/${leader.id}`} key={leader.id}>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={leader.teamLogo}
                  alt={`${leader.teamName.default}&apos;s logo`}
                  width={50}
                  height={50}
                  priority
                />
                {`#${ leader.sweaterNumber } ${ leader.firstName.default } ${ leader.lastName.default }`}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <Image
              src={leader.headshot}
              alt={`${leader.lastName.default}&apos;s headshot`}
              width={300}
              height={400}
              priority
            />
            <ul className="mt-5">
              <li>
                {statName}: {
                  isPercent ? `${(leader.value * 100).toFixed(2)}%` : (
                    decimals ? leader.value.toFixed(decimals) : leader.value
                  )
                }
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
