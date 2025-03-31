'use client'

import { ColumnDef } from '@tanstack/react-table'

import { type GameColumn } from '@/app/types/Game'

const sharedColumns: ColumnDef<GameColumn>[] = [
  {
    accessorKey: 'gameDate',
    header: 'Game Date',
  },
  {
    accessorKey: 'gameType',
    header: 'Game Type',
  },
  {
    accessorKey: 'homeRoadFlag',
    header: 'Home Game',
  },
  {
    accessorKey: 'teamAbbrev',
    header: 'Team',
  },
  {
    accessorKey: 'opponentAbbrev',
    header: 'Opponent',
  },
]

const toi: ColumnDef<GameColumn>[] = [
  {
    accessorKey: 'toi',
    header: 'Time on Ice',
  },
]

export const goalieColumns: ColumnDef<GameColumn>[] = [
  ...sharedColumns,
  {
    accessorKey: 'decision',
    header: 'Decision',
  },
  {
    accessorKey: 'goalsAgainst',
    header: 'Goals Against',
  },
  {
    accessorKey: 'savePctg',
    header: 'Save %',
  },
  {
    accessorKey: 'gamesStarted',
    header: 'Games Started',
  },
  {
    accessorKey: 'shotsAgainst',
    header: 'Shots Against',
  },
  {
    accessorKey: 'penaltyMins',
    header: 'Penalty Minutes',
  },
  ...toi
]

export const skaterColumns: ColumnDef<GameColumn>[] = [
  ...sharedColumns,
  {
    accessorKey: 'points',
    header: 'Points',
  },
  {
    accessorKey: 'goals',
    header: 'Goals',
  },
  {
    accessorKey: 'assists',
    header: 'Assists',
  },
  {
    accessorKey: 'powerPlayGoals',
    header: 'PP Goals',
  },
  {
    accessorKey: 'shorthandedGoals',
    header: 'Shorthanded Goals',
  },
  {
    accessorKey: 'pim',
    header: 'Penalty Minutes',
  },
  {
    accessorKey: 'plusMinus',
    header: '+ / -',
  },
  {
    accessorKey: 'shots',
    header: 'Shots',
  },
  {
    accessorKey: 'shifts',
    header: 'Shifts',
  },
  ...toi
]
