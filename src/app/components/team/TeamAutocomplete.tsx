'use client'

import { Dispatch, SetStateAction } from 'react'
import useSWR from 'swr'

import { fetcher } from '@/app/utils/fetcher'

import Autocomplete from '@/app/components/Autocomplete'
import Loading from '@/app/components/Loading'

import { type Team } from '@/app/types/team'

export default function TeamAutocomplete({ handleSetValue }: { handleSetValue: Dispatch<SetStateAction<string>> }) {
  const { data, error, isLoading } = useSWR('/api/team/list', fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <Loading />

  const teams = data.map((team: Team) => { return { label: team.fullName, value: team.triCode } })

  return (
    <div>
      <Autocomplete options={teams} handleSetValue={handleSetValue} />
    </div>
  )
}
