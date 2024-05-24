import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, TextField, Typography, Paper, Alert } from '@mui/material';

const RecipeForm = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRecipe('');
    setError('');

    try {
      const response = await axios.post('https://localhost:7284/api/Recipes', { ingredients });
      setRecipe(response.data.recipe);
    } catch (error) {
      setError('Error retrieving recipe.');
      console.error(error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ backgroundColor: '#ffffff', padding: 3, borderRadius: 2 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Chef AI Recipe Generator
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            label="Ingredients"
            variant="outlined"
            fullWidth
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
          />
          <Button type="submit" variant="contained" color="primary">
            ОТРИМАТИ РЕЦЕПТ
          </Button>
        </Box>
      </Paper>
      {recipe && (
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            ChefAI:
          </Typography>
          <Typography variant="body1">{recipe}</Typography>
        </Paper>
      )}
      {error && <Alert severity="error" sx={{ marginTop: 2 }}>{error}</Alert>}
    </Container>
  );
};

export default RecipeForm;
