'use client'

import { ColumnDef } from '@tanstack/react-table'

import { type GameColumns } from '@/app/types/Game'

export const columns: ColumnDef<GameColumns>[] = [
  {
    accessorKey: 'gameDate',
    header: 'Game Date',
  },
  {
    accessorKey: 'gameType',
    header: 'Game Type',
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
    accessorKey: 'shorthandedGoals',
    header: 'Shorthanded Goals',
  },
  {
    accessorKey: 'powerPlayGoals',
    header: 'PP Goals',
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
    accessorKey: 'homeRoadFlag',
    header: 'Home Game',
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
    accessorKey: 'toi',
    header: 'Time on Ice',
  },
  {
    accessorKey: 'pim',
    header: 'Penalty Minutes',
  },
]
