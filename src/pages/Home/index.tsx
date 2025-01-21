import { FC, useState, useEffect } from "react";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import Menu from "../../components/MenuResponsive";
import { Card } from "../../components/Card";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../Api";
import "./styles.scss";
import RecipesDetail from "../../components/RecipesDetail";
import Banner from "../../components/Banner";

interface Recipe {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
  strCategory: number;
  strArea: boolean;
}

interface RecipeResponse {
  meals: Recipe[];
}

const getRecipes = async (): Promise<RecipeResponse> => {
  const recipes = await apiClient.get("/search.php?f=m");
  console.log();
  return recipes.data;
};

const Home: FC = () => {
  const { data, isLoading, isError } = useQuery<RecipeResponse>({
    queryKey: ["recipes"],
    queryFn: getRecipes,
  });

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error al cargar las recetas</div>;

  return (
    <Layout>
      <Hero />
      <div className="card-container">
        <Banner />
        {data?.meals?.map((recipe: Recipe, index) => (
          <Card key={index} recipe={recipe} />
        ))}
      </div>
      <RecipesDetail />
    </Layout>
  );
};

export default Home;
