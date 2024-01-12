import { Column, Entity, Index, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity.ts";

@Index(['name', 'brand'])
@Entity()
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column()
    name: string;

    @Column()
    brand: string;

    @JoinTable()
    @ManyToMany(
        type => Flavor,
        flavor => flavor.coffees,
        {
            cascade: true,
        }
    )
    flavors: Flavor[];
}