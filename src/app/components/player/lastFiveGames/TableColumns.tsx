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
    accessorKey: 'gamesStarted',
    header: 'Games Started',
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
    accessorKey: 'shotsAgainst',
    header: 'Shots Against',
  },
  {
    accessorKey: 'penaltyMins',
    header: 'Penalty Minutes',
  },
]

export const skaterColumns: ColumnDef<GameColumn>[] = [
  ...sharedColumns,
  {
    accessorKey: 'goals',
    header: 'Goals',
  },
  {
    accessorKey: 'assists',
    header: 'Assists',
  },
  {
    accessorKey: 'shorthandedGoals',
    header: 'Shorthanded Goals',
  },
  {
    accessorKey: 'powerPlayGoals',
    header: 'PP Goals',
  },
  {
    accessorKey: 'plusMinus',
    header: '+ / -',
  },
  {
    accessorKey: 'points',
    header: 'Points',
  },
  {
    accessorKey: 'shots',
    header: 'Shots',
  },
  {
    accessorKey: 'shifts',
    header: 'Shifts',
  },
  {
    accessorKey: 'pim',
    header: 'Penalty Minutes',
  },
]
